import * as React from 'react';
import { act, cleanup, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { resetIdsForTests } from '@iqvizyonui/react-utilities';
import { DataVizPalette } from '../../utilities/colors';
import type { StateTimelineDataPoint } from './StateTimeline.types';
import { StateTimeline } from './StateTimeline';
import { useStateTimeline_unstable } from './useStateTimeline';

expect.extend(toHaveNoViolations);

const originalRAF = window.requestAnimationFrame;
const originalGetComputedStyle = window.getComputedStyle;
const originalGetBoundingClientRect = window.HTMLElement.prototype.getBoundingClientRect;

const data: StateTimelineDataPoint[] = [
  { start: 0, end: 25, row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
  { start: 25, end: 40, row: 'Voltage', state: 'Warning', color: DataVizPalette.warning },
  { start: 40, end: 100, row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
];

function updateChartWidthAndHeight() {
  jest.useFakeTimers();
  Object.defineProperty(window, 'requestAnimationFrame', {
    writable: true,
    value: (callback: FrameRequestCallback) => callback(0),
  });
  window.HTMLElement.prototype.getBoundingClientRect = jest.fn().mockReturnValue({
    bottom: 370,
    height: 350,
    left: 10,
    right: 610,
    top: 20,
    width: 600,
    x: 10,
    y: 20,
  } as DOMRect);
  window.getComputedStyle = jest.fn().mockImplementation(element => {
    const style = originalGetComputedStyle(element);
    return {
      ...style,
      marginTop: '0px',
      marginBottom: '0px',
      getPropertyValue: (property: string) =>
        property === 'margin-top' || property === 'margin-bottom' ? '0px' : style.getPropertyValue(property),
    } as CSSStyleDeclaration;
  });
}

beforeEach(() => {
  resetIdsForTests();
  updateChartWidthAndHeight();
});

afterEach(() => {
  cleanup();
  window.requestAnimationFrame = originalRAF;
  window.HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  window.getComputedStyle = originalGetComputedStyle;
  jest.useRealTimers();
});

describe('StateTimeline', () => {
  it('renders state intervals with the requested presentation', () => {
    const { container } = render(
      <StateTimeline data={data} fillOpacity={0.75} height={350} lineWidth={2} rowHeight={30} showYAxisLables />,
    );

    const intervals = container.querySelectorAll('rect');
    expect(intervals).toHaveLength(3);
    intervals.forEach(interval => {
      expect(interval).toHaveAttribute('fill-opacity', '0.75');
      expect(interval).toHaveAttribute('height', '30');
      expect(interval).toHaveAttribute('stroke-width', '2');
    });
    expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'State timeline with 3 intervals across 1 row.');
  });

  it('passes dimensions to the chart instead of the root element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { result } = renderHook(() => useStateTimeline_unstable({ data, height: 350, width: 700 }, ref));

    expect(result.current.chartProps.height).toBe(350);
    expect(result.current.chartProps.width).toBe(700);
    expect(result.current.root).not.toHaveProperty('height');
    expect(result.current.root).not.toHaveProperty('width');
  });

  it('clamps presentation values to supported ranges', () => {
    const { container } = render(<StateTimeline data={data} fillOpacity={2} lineWidth={-2} rowHeight={0} />);
    const interval = container.querySelector('rect');

    expect(interval).toHaveAttribute('fill-opacity', '1');
    expect(interval).toHaveAttribute('height', '1');
    expect(interval).toHaveAttribute('stroke-width', '0');
  });

  it('forwards the root ref and class name', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<StateTimeline ref={ref} className="custom-state-timeline" data={data} />);

    expect(ref.current).toBe(container.firstElementChild);
    expect(ref.current).toHaveClass('custom-state-timeline');
  });

  it('passes the original interval to a custom callout renderer', async () => {
    const renderCallout = jest.fn((point?: StateTimelineDataPoint) => <span>{point?.state}</span>);
    const { container } = render(<StateTimeline data={data} onRenderCalloutPerDataPoint={renderCallout} />);

    await act(() => {
      fireEvent.mouseOver(container.querySelector('rect')!);
    });

    expect(renderCallout).toHaveBeenCalledWith(data[0], expect.any(Function));
    expect(screen.getAllByText('Normal')).toHaveLength(2);
  });

  it('renders an accessible empty state when no data is provided', () => {
    render(<StateTimeline />);
    expect(screen.getByRole('alert')).toHaveAttribute('aria-label', 'Graph has no data to display');
  });

  it('has no automated accessibility violations', async () => {
    const { container } = render(<StateTimeline data={data} showYAxisLables />);
    jest.useRealTimers();
    const results = await axe(container);
    jest.useFakeTimers();
    expect(results).toHaveNoViolations();
  });
});

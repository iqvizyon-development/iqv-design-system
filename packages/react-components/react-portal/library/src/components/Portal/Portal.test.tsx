import { render } from '@testing-library/react';
import { IqvizyonProvider } from '@iqvizyonui/react-provider';
import { getParent } from '@iqvizyonui/react-utilities';
import * as React from 'react';

import { Portal } from './Portal';

describe('Portal', () => {
  /**
   * Note: see more visual regression tests for Portal in /apps/vr-tests.
   */
  it('renders a default state', () => {
    const children = 'test';
    const { getByText } = render(<Portal>{children}</Portal>);

    expect(getByText(children)).toMatchSnapshot();
  });

  it('applies "dir" attribute based on a context value', () => {
    const theme = {};
    const { getByText } = render(
      <>
        <IqvizyonProvider dir="ltr" theme={theme}>
          <Portal>LTR</Portal>
        </IqvizyonProvider>
        <IqvizyonProvider dir="rtl" theme={theme}>
          <Portal>RTL</Portal>
        </IqvizyonProvider>
      </>,
    );

    expect(getByText('LTR')).toHaveAttribute('dir', 'ltr');
    expect(getByText('RTL')).toHaveAttribute('dir', 'rtl');
  });

  it('applies "zIndex" style', () => {
    const { getByText } = render(<Portal>Test</Portal>);
    const element = getByText('Test');

    expect(element).toHaveStyle({
      zIndex: 1000000,
    });
  });

  it('should not set virtual parent if mount node contains virtual parent', () => {
    const Test = () => {
      const [el, setEl] = React.useState<HTMLDivElement | null>(null);
      return (
        <div id="parent">
          <div id="container" ref={setEl}>
            <Portal mountNode={el}>Foo</Portal>
          </div>
        </div>
      );
    };

    const { container } = render(<Test />);

    const mountNode = container.querySelector<HTMLSpanElement>('#container');
    expect((getParent(mountNode) as HTMLElement).id).toBe('parent');
  });
});

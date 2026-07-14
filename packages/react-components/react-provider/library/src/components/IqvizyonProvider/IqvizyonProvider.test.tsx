import { teamsLightTheme } from '@iqvizyonui/react-theme';
import { resetIdsForTests } from '@iqvizyonui/react-utilities';
import { render } from '@testing-library/react';
import * as React from 'react';

import { IqvizyonProvider } from './IqvizyonProvider';
import { iqvizyonProviderClassNames } from './useIqvizyonProviderStyles.styles';
import { isConformant } from '../../testing/isConformant';

jest.mock('@iqvizyonui/react-utilities', () => ({
  ...jest.requireActual('@iqvizyonui/react-utilities'),
  ...jest.requireActual('../../testing/createUseIdMock').createUseIdMock(),
}));

describe('IqvizyonProvider', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const noop = () => {};
  let logErrorSpy: jest.Spied<typeof console.error>;

  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(noop);
    logErrorSpy = jest.spyOn(console, 'error').mockImplementation(noop);
  });

  isConformant({
    disabledTests: ['component-handles-classname'],
    Component: IqvizyonProvider,
    displayName: 'IqvizyonProvider',
  });

  afterEach(() => {
    resetIdsForTests();
  });

  /**
   * Note: see more visual regression tests for IqvizyonProvider in /apps/vr-tests.
   */
  it('renders a default state', () => {
    const { container } = render(
      <IqvizyonProvider theme={{ colorBrandBackground2: '#fff' }}>Default IqvizyonProvider</IqvizyonProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it(`should emit an error on duplicated IDs`, () => {
    const containerA = document.createElement('div');
    const containerB = document.createElement('div');

    document.body.appendChild(containerA);
    document.body.appendChild(containerB);

    render(<IqvizyonProvider theme={teamsLightTheme} />, { container: containerA });
    expect(document.body.querySelectorAll(`.${iqvizyonProviderClassNames.root}`)).toHaveLength(1);

    // This resets IDs, so the next IqvizyonProvider will have the same IDs as the first one
    resetIdsForTests();

    render(<IqvizyonProvider theme={teamsLightTheme} />, { container: containerB });
    expect(document.body.querySelectorAll(`.${iqvizyonProviderClassNames.root}`)).toHaveLength(2);

    expect(logErrorSpy).toHaveBeenCalledTimes(1);
    expect(logErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('@iqvizyonui/react-provider: There are conflicting ids in your DOM.'),
    );
  });

  it('does not render style element when not in SSR', () => {
    const { container } = render(<IqvizyonProvider theme={teamsLightTheme} />);
    expect(container.querySelector('style')).toBeNull();
  });

  describe('applies "dir" attribute', () => {
    it('ltr', () => {
      const { getByText } = render(<IqvizyonProvider dir="ltr">Test</IqvizyonProvider>);
      const element = getByText('Test');

      expect(element).toHaveAttribute('dir', 'ltr');
      expect(element).toHaveStyle({ textAlign: 'left' });
    });

    it('rtl', () => {
      const { getByText } = render(<IqvizyonProvider dir="rtl">Test</IqvizyonProvider>);
      const element = getByText('Test');

      expect(element).toHaveAttribute('dir', 'rtl');
      expect(element).toHaveStyle({ textAlign: 'right' });
    });
  });
});

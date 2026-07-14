import * as React from 'react';
import { render } from '@testing-library/react';
import { isConformant } from '../../testing/isConformant';
import { AlphaSlider } from './AlphaSlider';
import { alphaSliderClassNames } from './useAlphaSliderStyles.styles';

describe('AlphaSlider', () => {
  isConformant({
    Component: AlphaSlider,
    displayName: 'AlphaSlider',
    primarySlot: 'input',
    testOptions: {
      'has-static-classnames': [
        {
          props: {},
          expectedClassNames: {
            root: alphaSliderClassNames.root,
            thumb: alphaSliderClassNames.thumb,
            rail: alphaSliderClassNames.rail,
            input: alphaSliderClassNames.input,
          },
        },
      ],
    },
  });

  it('renders a default state', () => {
    const result = render(<AlphaSlider color={{ h: 0, s: 1, v: 1 }} />);
    expect(result.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="iui-ColorSlider iui-AlphaSlider"
          style="--iui-AlphaSlider--direction: 90deg; --iui-AlphaSlider--progress: 100%; --iui-AlphaSlider__thumb--color: hsla(0 100%, 50%, 1); --iui-AlphaSlider__rail--color: hsl(0 100%, 50%);"
        >
          <input
            class="iui-ColorSlider__input iui-AlphaSlider__input"
            id="slider-_r_8_"
            type="range"
            value="100"
          />
          <div
            class="iui-ColorSlider__rail iui-AlphaSlider__rail"
          />
          <div
            class="iui-ColorSlider__thumb iui-AlphaSlider__thumb iui-AlphaSlider__thumb"
          />
        </div>
      </div>
    `);
  });
});

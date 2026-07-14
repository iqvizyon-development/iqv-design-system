import * as React from 'react';
import { render } from '@testing-library/react';
import { isConformant } from '../../testing/isConformant';
import { ColorArea } from './ColorArea';

describe('ColorArea', () => {
  isConformant({
    Component: ColorArea,
    displayName: 'ColorArea',
  });

  it('renders a default state', () => {
    const result = render(<ColorArea color={{ h: 324, s: 1, v: 0.5, a: 1 }} />);
    expect(result.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="iui-ColorArea"
          style="--iui-AreaX--progress: 100%; --iui-AreaY--progress: 50%; --iui-Area__thumb--color: rgb(128, 0, 76); --iui-Area--main-color: hsl(324, 100%, 50%);"
        >
          <div
            class="iui-ColorArea__thumb"
          >
            <input
              class="iui-ColorArea__inputX"
              id="sliderX-_r_e_"
              type="range"
              value="100"
            />
            <input
              class="iui-ColorArea__inputY"
              id="sliderY-_r_f_"
              tabindex="-1"
              type="range"
              value="50"
            />
          </div>
        </div>
      </div>
    `);
  });
});

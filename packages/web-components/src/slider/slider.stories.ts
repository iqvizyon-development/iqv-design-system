import { html, ref } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import { SliderOrientation as SliderSetOrientation, SliderSize as SliderSetSize } from './slider.options.js';
import type { Slider as IqvizyonSlider } from './slider.js';

type Story = StoryObj<IqvizyonSlider>;
const { argTypes } = getStorybookHelpers<IqvizyonSlider>('iqv-slider');

const storyTemplate = html<StoryArgs<IqvizyonSlider>>`
  <iqv-slider
    ?disabled="${story => story.disabled}"
    id="${story => story.id}"
    step="${story => story.step}"
    size="${story => story.size}"
    min="${story => story.min}"
    max="${story => story.max}"
    orientation="${story => story.orientation}"
    value="${story => story.value}"
    slot="${story => story.slot}"
  ></iqv-slider>
`;

export default {
  title: 'Components/Slider',
  render: renderComponent(storyTemplate),
  argTypes,
} as Meta<IqvizyonSlider>;

export const Default: Story = {};

export const SliderInField: Story = {
  render: renderComponent(html`
    <iqv-field label-position="before">
      <label slot="label" for="slider-in-field">Slider</label>
      <iqv-slider slot="input" id="slider-in-field"></iqv-slider>
    </iqv-field>
  `),
};

export const VerticalOrientation: Story = {
  args: {
    orientation: SliderSetOrientation.vertical,
  },
};

export const SmallSize: Story = {
  args: {
    size: SliderSetSize.small,
  },
};

export const MediumSize: Story = {
  args: {
    size: SliderSetSize.medium,
  },
};

export const SliderWithValue: Story = {
  render: renderComponent(html`
    <iqv-field label-position="above">
      <label slot="label" for="slider-in-field">Slider value</label>
      <iqv-slider slot="input" id="slider-in-field" ${ref('slider')}></iqv-slider>
      <iqv-text slot="message" size="200">
        Current value: <output :value="${x => x.slider.value}"></output>
      </iqv-text>
    </iqv-field>
  `),
};

export const MinMax: Story = {
  args: {
    // @ts-expect-error Slider attrs are typed as strings??
    min: 0,
    // @ts-expect-error Slider attrs are typed as strings??
    max: 100,
  },
};

export const SliderSteps: Story = {
  args: {
    // @ts-expect-error Slider attrs are typed as strings??
    step: 10,
  },
};

export const SliderDisabled = {
  args: {
    disabled: true,
  },
};

import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Label as IqvizyonLabel } from './label.js';
import { LabelSize, LabelWeight } from './label.options.js';

type Story = StoryObj<IqvizyonLabel>;
const { argTypes } = getStorybookHelpers<IqvizyonLabel>('iqv-label');

const storyTemplate = html<StoryArgs<IqvizyonLabel>>`
  <iqv-label
    weight="${story => story.weight}"
    size="${story => story.size}"
    ?required="${story => story.required}"
    ?disabled="${story => story.disabled}"
    >${story => story.slottedContent?.()}</iqv-label
  >
`;

export default {
  title: 'Components/Label',
  render: renderComponent(storyTemplate),
  args: {
    required: false,
    size: LabelSize.medium,
    weight: LabelWeight.regular,
    slottedContent: () => 'Label',
  },
  argTypes,
} as Meta<IqvizyonLabel>;

export const Default = {};

export const Size: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonLabel>>`
    <div style="display: flex; flex-direction: row; justify-content: space-around; align-items: center; gap: 10px;">
      <iqv-label size="small">Small Label</iqv-label>
      <iqv-label size="medium">Medium Label</iqv-label>
      <iqv-label size="large">Large Label</iqv-label>
    </div>
  `),
};

export const Weight: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonLabel>>`
    <div style="display: flex; flex-direction: row; justify-content: space-around; align-items: center; gap: 10px;">
      <iqv-label weight="regular">Regular Label</iqv-label>
      <iqv-label weight="semibold">Semibold Label</iqv-label>
    </div>
  `),
};

export const Required: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonLabel>>` <iqv-label required>Required Label</iqv-label> `),
};

export const Disabled: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonLabel>>` <iqv-label disabled>Disabled Label</iqv-label> `),
};

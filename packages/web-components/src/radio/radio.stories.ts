import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Radio as IqvizyonRadio } from './radio.js';

type Story = StoryObj<IqvizyonRadio>;
const { argTypes } = getStorybookHelpers<IqvizyonRadio>('iqv-radio');

const storyTemplate = html<StoryArgs<IqvizyonRadio>>`
  <iqv-radio
    id="${story => story.id}"
    ?checked="${story => story.checked}"
    ?disabled="${story => story.disabled}"
    name="${story => story.name}"
    ?required="${story => story.required}"
    value="${story => story.value}"
  ></iqv-radio>
`;

export default {
  title: 'Components/Radio',
  render: renderComponent(storyTemplate),
  argTypes,
} as Meta<IqvizyonRadio>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    value: 'Disabled Radio',
    disabled: true,
  },
};

export const Field: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonRadio>>`
    <iqv-field label-position="after">
      <label slot="label">${story => story.value}</label>
      <iqv-radio
        slot="input"
        id="${story => story.id}"
        ?checked="${story => story.checked}"
        ?disabled="${story => story.disabled}"
        name="${story => story.name}"
        ?required="${story => story.required}"
        value="${story => story.value}"
      ></iqv-radio>
    </iqv-field>
  `),
  args: {
    value: 'Apple',
  },
};

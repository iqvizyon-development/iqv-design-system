import { html, ref, repeat } from '@microsoft/fast-element';
import { LabelPosition } from '../field/field.options.js';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Switch as IqvizyonSwitch } from './switch.js';

type Story = StoryObj<IqvizyonSwitch>;

const { argTypes } = getStorybookHelpers<IqvizyonSwitch>('iqv-switch');

const storyTemplate = html<StoryArgs<IqvizyonSwitch>>`
  <iqv-switch
    ?checked="${story => story.checked}"
    ?disabled="${story => story.disabled}"
    id="${story => story.id}"
    name="${story => story.name}"
    ?required="${story => story.required}"
    slot="${story => story.slot}"
    ${ref('switch')}
  ></iqv-switch>
`;

const fieldStoryTemplate = html<StoryArgs<IqvizyonSwitch>>`
  <iqv-field label-position="${story => story.labelPosition}">
    <label slot="label">${story => story.label}</label>
    ${storyTemplate}
  </iqv-field>
`;

export default {
  title: 'Components/Switch',
  render: renderComponent(storyTemplate),
  args: {
    name: 'switch',
    checked: false,
    disabled: false,
    required: false,
  },
  argTypes,
} as Meta<IqvizyonSwitch>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonSwitch>>`
    ${repeat(
      [
        {
          disabled: true,
          label: 'Disabled unchecked',
          labelPosition: LabelPosition.after,
          slot: 'input',
        },
        {
          checked: true,
          disabled: true,
          label: 'Disabled checked',
          labelPosition: LabelPosition.after,
          slot: 'input',
        },
      ],
      html<StoryArgs<IqvizyonSwitch>>`${fieldStoryTemplate}<br />`,
    )}
  `),
};

export const Required: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonSwitch>>`
    <form
      @reset="${story => story.successMessage.toggleAttribute('hidden', true)}"
      @submit="${story => story.switch.checkValidity() && story.successMessage.toggleAttribute('hidden', false)}"
      style="display: inline-flex; flex-direction: column; gap: 1rem; max-width: 400px;"
    >
      ${fieldStoryTemplate}
      <div>
        <iqv-button type="submit" appearance="primary">Submit</iqv-button>
        <iqv-button type="reset" ${ref('resetButton')}>Reset</iqv-button>
      </div>
      <span id="success-message" hidden ${ref('successMessage')}>Form submitted successfully!</span>
    </form>
  `),
  args: {
    slot: 'input',
    labelPosition: LabelPosition.after,
    required: true,
    label: 'Required',
  },
};

export const LabelBefore: Story = {
  render: renderComponent(fieldStoryTemplate),
  args: {
    labelPosition: LabelPosition.before,
    label: 'Label before',
    slot: 'input',
  },
};

export const LabelWrapping: Story = {
  render: renderComponent(fieldStoryTemplate),
  args: {
    labelPosition: LabelPosition.after,
    label: 'Here is an example of a switch with a long label and it starts to wrap to a second line',
    slot: 'input',
  },
  decorators: [
    story => {
      const storyElement = story() as HTMLElement;
      storyElement.style.width = '400px';
      return storyElement;
    },
  ],
};

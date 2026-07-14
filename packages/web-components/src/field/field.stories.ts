import { html, ref, repeat } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { colorStatusSuccessBackground3 } from '../theme/design-tokens.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Field as IqvizyonField } from './field.js';
import { LabelPosition } from './field.options.js';

type Story = StoryObj<IqvizyonField>;
const { argTypes } = getStorybookHelpers<IqvizyonField>('iqv-field');

const SuccessIcon = html.partial(/* html */ `
  <svg fill="${colorStatusSuccessBackground3}" aria-hidden="true" width="1em" height="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Zm7.35-.9a.5.5 0 1 0-.7-.7L5.5 6.54 4.35 5.4a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l2.5-2.5Z" fill="${colorStatusSuccessBackground3}" />
  </svg>
`);

export const storyTemplate = html<StoryArgs<IqvizyonField>>`
  <iqv-field label-position="${story => story.labelPosition}">
    ${story => story.labelSlottedContent?.()} ${story => story.inputSlottedContent?.()}
    ${story => story.messageSlottedContent?.()}
  </iqv-field>
`;

const textInputLink = '<a href="/docs/components-textinput--docs">Text Input</a>';
const textAreaLink = '<a href="/docs/components-textarea--docs">Text Area</a>';

const storyDescription = `
The ${textInputLink} and ${textAreaLink} components have a specific implementation with \`<iqv-field>\` that differs from other form controls to ensure proper accessibility support.

**For Text Input and Text Area:**
- The label must be passed as a child element (not using the field's label slot)
- This implementation is required for accessibility features like zoom text and voice over to work correctly
- A previous issue where the aria-hidden attribute prevented zoom text functionality on the field label has been resolved

**For Other Form Controls (checkbox, radio, etc.):**
- The label should be placed in the field's label slot using \`slot="label"\`
- This is the standard implementation pattern for most form controls

This distinction ensures that text-based inputs maintain proper accessibility while other controls follow the standard slotting pattern.
`;

export default {
  title: 'Components/Field',
  render: renderComponent(storyTemplate),
  excludeStories: ['storyTemplate'],
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
  args: {
    label: {
      text: 'Example field',
    },
    message: {
      message: 'This is a success message',
      icon: () => html`${SuccessIcon}`,
    },
    labelSlottedContent: () => html`<label slot="label">${story => story.label.text}</label>`,
    inputSlottedContent: () => html`<iqv-checkbox slot="input"></iqv-checkbox>`,
    labelPosition: LabelPosition.above,
  },
  argTypes,
} as Meta<IqvizyonField>;

export const Default: Story = {};

export const LabelPositions: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonField>>`
    ${repeat(
      story => story.storyItems,
      html`
        <div>
          <iqv-field label-position="${story => story.labelPosition}">
            <label slot="label">${story => story.label}</label>
            <iqv-checkbox slot="input"></iqv-checkbox>
          </iqv-field>
        </div>
        <br />
      `,
    )}
  `),
  args: {
    storyItems: Object.values(LabelPosition).map(labelPosition => ({
      labelPosition,
      label: `Label position: ${labelPosition}`,
    })),
  },
};

export const TextInput: Story = {
  args: {
    label: {
      text: 'Text Input',
    },
    labelPosition: undefined,
    inputSlottedContent: () => html`<iqv-text-input slot="input">${story => story.label.text}</iqv-text-input>`,
    labelSlottedContent: () => html``,
    messageSlottedContent: undefined,
  },
};

export const TextInputFormSubmission: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonField>>`
    <form
      style="display: inline-flex; align-items: start; flex-direction: column; gap: 20px"
      @reset="${x => x.successMessage.toggleAttribute('hidden', true)}"
      @submit="${x => x.input?.checkValidity() && x.successMessage.toggleAttribute('hidden', false)}"
    >
      <iqv-field>
        <iqv-text-input ${ref('input')} required slot="input" id="form-input"
          >${story => story.label}</iqv-text-input
        >
      </iqv-field>
      <iqv-button type="submit">Submit</iqv-button>
      <span id="success-message" hidden ${ref('successMessage')}> Form submitted successfully! </span>
    </form>
  `),
  args: {
    label: 'Form',
  },
};

export const Required: Story = {
  args: {
    label: {
      text: 'Required field',
    },
    inputSlottedContent: () => html`<iqv-checkbox required slot="input"></iqv-checkbox>`,
    messageSlottedContent: undefined,
  },
};

export const DisabledControl: Story = {
  args: {
    label: {
      text: 'Disabled field',
    },
    inputSlottedContent: () => html`<iqv-checkbox disabled slot="input"></iqv-checkbox>`,
    messageSlottedContent: undefined,
  },
};

export const Size: Story = {
  render: renderComponent(html`
    <iqv-field size="medium">
      <label slot="label" for="field-medium-size">Medium field</label>
      <iqv-checkbox size="medium" slot="input" id="field-medium-size"></iqv-checkbox>
    </iqv-field>
    <iqv-field size="large">
      <label slot="label" for="field-large-size">Large field</label>
      <iqv-checkbox size="large" slot="input" id="field-large-size"></iqv-checkbox>
    </iqv-field>
  `),
};

export const Hint: Story = {
  args: {
    label: {
      text: 'Example with hint',
    },
    message: {
      message: 'Sample hint text.',
    },
    inputSlottedContent: () =>
      html`<iqv-text-input slot="input" aria-describedby="hint-message"
        >${story => story.label.text}</iqv-text-input
      >`,
    labelSlottedContent: () => html``,
    messageSlottedContent: () =>
      html`<iqv-text slot="message" size="200" id="hint-message">${story => story.message?.message}</iqv-text>`,
  },
};

export const ComponentExamples: Story = {
  render: renderComponent(html`
    <div style="display: flex; flex-direction: column; row-gap: 16px;">
      <iqv-field label-position="above">
        <label slot="label" for="field-text">Text Input</label>
        <iqv-text-input slot="input" id="field-text"></iqv-text-input>
      </iqv-field>
      <iqv-field label-position="above" style="max-width: 400px">
        <label slot="label" for="field-slider">Slider</label>
        <iqv-slider size="medium" slot="input" id="field-slider"></iqv-slider>
      </iqv-field>
      <iqv-field label-position="after">
        <label slot="label" for="field-checkbox">Checkbox</label>
        <iqv-checkbox slot="input" id="field-checkbox"></iqv-checkbox>
      </iqv-field>
      <iqv-field label-position="above">
        <label slot="label" for="field-radio">Radio Group</label>
        <iqv-radio-group slot="input" name="field-radio" orientation="vertical">
          <iqv-field label-position="after">
            <label slot="label">Apple</label>
            <iqv-radio slot="input" value="apple"></iqv-radio>
          </iqv-field>
          <iqv-field label-position="after">
            <label slot="label">Pear</label>
            <iqv-radio slot="input" value="pear"></iqv-radio>
          </iqv-field>
          <iqv-field label-position="after">
            <label slot="label">Banana</label>
            <iqv-radio slot="input" value="banana"></iqv-radio>
          </iqv-field>
          <iqv-field label-position="after">
            <label slot="label">Orange</label>
            <iqv-radio slot="input" value="orange"></iqv-radio>
          </iqv-field>
        </iqv-radio-group>
      </iqv-field>
    </div>
  `),
};

export const ThirdPartyControls: Story = {
  render: renderComponent(html`
    <form action="#" style="display:flex;flex-flow:column;align-items:start;gap:10px">
      <iqv-field label-position="above" style="max-width: 400px">
        <label slot="label" for="native-color">Color picker</label>
        <input slot="input" type="color" id="native-color" required />
      </iqv-field>
      <iqv-field label-position="after">
        <label slot="label" for="native-checkbox">Checkbox</label>
        <input slot="input" type="checkbox" id="native-checkbox" />
      </iqv-field>
    </form>
  `),
};

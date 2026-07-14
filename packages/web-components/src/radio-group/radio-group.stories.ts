import { html, ref, repeat } from '@microsoft/fast-element';
import type { Field as IqvizyonField } from '../field/field.js';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { ValidationFlags } from '../field/field.options.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { RadioGroup as IqvizyonRadioGroup } from './radio-group.js';
import { RadioGroupOrientation } from './radio-group.options.js';

type Story = StoryObj<IqvizyonRadioGroup>;
const { argTypes } = getStorybookHelpers<IqvizyonRadioGroup>('iqv-radio-group');

const radioFieldTemplate = html<StoryArgs<IqvizyonField>>`
  <iqv-field label-position="${story => story.labelPosition ?? 'after'}">
    ${story => story.labelSlottedContent?.()}
    <iqv-radio
      slot="input"
      name="${(x, c) => c.parent.name}"
      ?checked="${story => story.checked}"
      ?disabled="${story => story.disabled}"
      value="${story => story.value}"
    ></iqv-radio>
  </iqv-field>
`;

const storyTemplate = html<StoryArgs<IqvizyonRadioGroup>>`
  <iqv-field label-position="above">
    ${story => story.labelSlottedContent?.()}
    <iqv-radio-group
      slot="input"
      aria-labelledby="${story => story.id}--label"
      ?disabled=${story => story.disabled}
      orientation="${story => story.orientation}"
      name="${story => story.name}"
      value="${story => story.value}"
      required="${story => story.required}"
      ${ref('radioGroup')}
    >
      ${story => story.slottedContent?.()}
    </iqv-radio-group>
    ${story => story.messageSlottedContent?.()}
  </iqv-field>
`;

export default {
  title: 'Components/RadioGroup',
  render: renderComponent(storyTemplate),
  args: {
    slottedContent: () => html`
      ${repeat(
        [
          {
            labelSlottedContent: () => html`<label slot="label">Apple</label>`,
            value: 'apple',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Pear</label>`,
            value: 'pear',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Banana</label>`,
            value: 'banana',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Orange</label>`,
            value: 'orange',
          },
        ],
        radioFieldTemplate,
      )}
    `,
    labelSlottedContent: () => html`<label slot="label">Favorite Fruit</label>`,
    name: 'favorite-fruit',
  },
  argTypes: {
    ...argTypes,
    labelSlottedContent: { table: { disable: true } },
    messageSlottedContent: { table: { disable: true } },
  },
} as Meta<IqvizyonRadioGroup>;

export const Default: Story = {};

export const VerticalOrientation: Story = {
  args: {
    id: 'radio-group-vertical',
    orientation: RadioGroupOrientation.vertical,
  },
};

export const InitialValue: Story = {
  args: {
    id: 'radio-group-default',
    value: 'banana',
  },
};

export const InitialCheckedRadio: Story = {
  args: {
    id: 'radio-group-checked',
    slottedContent: () => html`
      ${repeat(
        [
          {
            labelSlottedContent: () => html`<label slot="label">Apple</label>`,
            value: 'apple',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Pear</label>`,
            checked: true,
            value: 'pear',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Banana</label>`,
            value: 'banana',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Orange</label>`,
            value: 'orange',
          },
        ],
        radioFieldTemplate,
      )}
    `,
  },
};

export const Disabled: Story = {
  args: {
    id: 'radio-group-disabled',
    disabled: true,
  },
};

export const DisabledItems: Story = {
  args: {
    orientation: RadioGroupOrientation.vertical,
    id: 'radio-group-disabled-items',
    slottedContent: () => html`
      ${repeat(
        [
          {
            labelSlottedContent: () => html`<label slot="label">Apple</label>`,
            value: 'apple',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Pear</label>`,
            value: 'pear',
            disabled: true,
          },
          {
            labelSlottedContent: () => html`<label slot="label">Banana</label>`,
            value: 'banana',
            disabled: true,
          },
          {
            labelSlottedContent: () => html`<label slot="label">Orange</label>`,
            value: 'orange',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Grape</label>`,
            value: 'grape',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Kiwi</label>`,
            value: 'kiwi',
            disabled: true,
          },
        ],
        radioFieldTemplate,
      )}
    `,
  },
};

export const DisabledAndCheckedItem: Story = {
  args: {
    orientation: RadioGroupOrientation.vertical,
    id: 'radio-group-disabled-and-checked-item',
    value: 'pear',
    slottedContent: () => html`
      ${repeat(
        [
          {
            labelSlottedContent: () => html`<label slot="label">Apple</label>`,
            value: 'apple',
            disabled: true,
          },
          {
            labelSlottedContent: () => html`<label slot="label">Pear</label>`,
            value: 'pear',
            disabled: true,
          },
          {
            labelSlottedContent: () => html`<label slot="label">Banana</label>`,
            value: 'banana',
            disabled: true,
          },
          {
            labelSlottedContent: () => html`<label slot="label">Orange</label>`,
            value: 'orange',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Grape</label>`,
            value: 'grape',
          },
          {
            labelSlottedContent: () => html`<label slot="label">Kiwi</label>`,
            value: 'kiwi',
            disabled: true,
          },
        ],
        radioFieldTemplate,
      )}
    `,
  },
};

export const Required: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonRadioGroup>>`
    <form
      @reset="${story => story.successMessage.toggleAttribute('hidden', true)}"
      @submit="${story => story.radioGroup.checkValidity() && story.successMessage.toggleAttribute('hidden', false)}"
      style="display: inline-flex; flex-direction: column; gap: 1rem; max-width: 400px;"
    >
      ${storyTemplate}
      <div>
        <iqv-button type="submit" appearance="primary">Submit</iqv-button>
        <iqv-button id="reset-button" type="reset" ${ref('resetButton')}>Reset</iqv-button>
      </div>
      <span id="success-message" hidden ${ref('successMessage')}> Form submitted successfully! </span>
    </form>
  `),
  args: {
    orientation: RadioGroupOrientation.vertical,
    required: true,
  },
};

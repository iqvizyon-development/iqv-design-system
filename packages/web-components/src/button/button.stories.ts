import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Button as IqvizyonButton } from './button.js';
import { ButtonAppearance, ButtonShape, ButtonSize, ButtonType } from './button.options.js';

type Story = StoryObj<IqvizyonButton>;
const { argTypes } = getStorybookHelpers<IqvizyonButton>('iqv-button');

const storyTemplate = html<StoryArgs<IqvizyonButton>>`
  <iqv-button
    ?disabled-focusable="${story => story.disabledFocusable}"
    ?disabled="${story => story.disabled}"
    ?formnovalidate="${story => story.formnovalidate}"
    ?icon-only="${story => story.iconOnly}"
    appearance="${story => story.appearance}"
    form="${story => story.form}"
    formaction="${story => story.formaction}"
    formenctype="${story => story.formenctype}"
    formmethod="${story => story.formmethod}"
    formtarget="${story => story.formtarget}"
    name="${story => story.name}"
    shape="${story => story.shape}"
    size="${story => story.size}"
    type="${story => story.type}"
    value="${story => story.value}"
  >
    ${story => story.startSlottedContent?.()} ${story => story.slottedContent?.()}
    ${story => story.endSlottedContent?.()}
  </iqv-button>
`;

export default {
  title: 'Components/Button/Button',
  render: renderComponent(storyTemplate),
  args: {
    disabled: false,
    disabledFocusable: false,
    slottedContent: () => 'Button',
  },
  argTypes,
} as Meta<IqvizyonButton>;

export const Default: Story = {};

export const Appearance: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonButton>>`
    <iqv-button>Default</iqv-button>
    <iqv-button appearance="primary">Primary</iqv-button>
    <iqv-button appearance="outline">Outline</iqv-button>
    <iqv-button appearance="subtle">Subtle</iqv-button>
    <iqv-button appearance="transparent">Transparent</iqv-button>
  `),
};

export const Shape: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonButton>>`
    <iqv-button shape="rounded">Rounded</iqv-button>
    <iqv-button shape="circular">Circular</iqv-button>
    <iqv-button shape="square">Square</iqv-button>
  `),
};

export const Size: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonButton>>`
    <iqv-button size="small">Small</iqv-button>
    <iqv-button size="small" icon>
      <svg
        fill="currentColor"
        slot="start"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
          fill="currentColor"
        ></path>
      </svg>
      Small with calendar icon
    </iqv-button>
    <iqv-button size="small" icon-only aria-label="Small icon only button">
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
          fill="currentColor"
        ></path>
      </svg>
    </iqv-button>
    <iqv-button size="medium">Medium</iqv-button>
    <iqv-button size="medium" icon>
      <svg
        fill="currentColor"
        slot="start"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
          fill="currentColor"
        ></path>
      </svg>
      Medium with calendar icon
    </iqv-button>
    <iqv-button size="medium" icon-only aria-label="Medium icon only button">
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
          fill="currentColor"
        ></path>
      </svg>
    </iqv-button>
    <iqv-button size="large">Large</iqv-button>
    <iqv-button size="large" icon>
      <svg
        fill="currentColor"
        slot="start"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
          fill="currentColor"
        ></path>
      </svg>
      Large with calendar icon
    </iqv-button>
    <iqv-button size="large" icon-only aria-label="Large icon only button">
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
          fill="currentColor"
        ></path>
      </svg>
    </iqv-button>
  `),
};

export const Disabled: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonButton>>`
    <iqv-button>Enabled state</iqv-button>
    <iqv-button disabled>Disabled state</iqv-button>
    <iqv-button disabled-focusable>Disabled focusable state</iqv-button>
    <iqv-button appearance="primary">Enabled state</iqv-button>
    <iqv-button appearance="primary" disabled>Disabled state</iqv-button>
    <iqv-button appearance="primary" disabled-focusable>Disabled focusable state</iqv-button>
  `),
};

export const WithLongText: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonButton>>`
    <style>
      .max-width {
        width: 280px;
      }
    </style>
    <iqv-button>Short text</iqv-button>
    <iqv-button class="max-width">Long text wraps after it hits the max width of the component</iqv-button>
  `),
};

export const ResetAndSubmitButtonsInForm: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonButton>>`
    <form action="/asdf" id="myform" onreset="output.textContent = ''">
      <label>Email: <input id="input-field" name="input-field" type="email" /></label>
      <button type="submit" value="submitted" name="normalsubmit">Button Submit</button>
      <button type="reset">Button Reset</button>
      <iqv-button type="reset">Iqvizyon Button Reset</iqv-button>
    </form>
    <iqv-button name="fluentsubmit" type="submit" value="submitted" form="myform"
      >Iqvizyon Button Submit</iqv-button
    >
    <div id="something">Div Label</div>
    <output id="output"></output>
  `),
};

import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { colorNeutralBackground1, colorNeutralBackground3 } from '../theme/design-tokens.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { TextArea as IqvizyonTextArea } from './textarea.js';
import { TextAreaAppearance, TextAreaResize, TextAreaSize } from './textarea.options.js';

type Story = StoryObj<IqvizyonTextArea>;
const { argTypes } = getStorybookHelpers<IqvizyonTextArea>('iqv-text-area');

const storyTemplate = html<StoryArgs<IqvizyonTextArea>>`
  <iqv-textarea
    appearance="${x => x.appearance}"
    autocomplete="${x => x.autocomplete}"
    ?auto-resize="${x => x.autoResize}"
    ?block="${x => x.block}"
    dirname="${x => x.dirName}"
    ?disabled="${x => x.disabled}"
    ?display-shadow="${x => x.displayShadow}"
    form="${x => x.form}"
    maxlength="${x => x.maxLength}"
    minlength="${x => x.minLength}"
    name="${x => x.name}"
    placeholder="${x => x.placeholder}"
    ?readonly="${x => x.readOnly}"
    ?required="${x => x.required}"
    size="${x => x.size}"
    ?spellcheck="${x => x.spellcheck}"
    resize="${x => x.resize}"
    value="${x => x.value}"
  >
    ${story => story.labelSlottedContent?.()} ${story => story.slottedContent?.()}
  </iqv-textarea>
`;

export default {
  title: 'Components/TextArea',
  render: renderComponent(storyTemplate),
  argTypes,
} as Meta<IqvizyonTextArea>;

export const Default: Story = {};

export const TextArea: Story = {
  args: {
    labelSlottedContent: () =>
      html`<iqv-label slot="label" ?required="${x => x.required}">Sample textarea</iqv-label>`,
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'This is a placeholder',
  },
};

export const Appearance: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonTextArea>>`
    <div style="display: flex; flex-direction: column; gap: 2rem; align-items: start;">
      <div style="padding: 1rem;">
        <iqv-textarea>
          <iqv-label slot="label">Outlined (default)</iqv-label>
        </iqv-textarea>
      </div>
      <div style="padding: 1rem; background-color: ${colorNeutralBackground1};">
        <iqv-textarea appearance="filled-darker">
          <iqv-label slot="label">Filled darker</iqv-label>
        </iqv-textarea>
      </div>
      <div style="padding: 1rem; background-color: ${colorNeutralBackground1};">
        <iqv-textarea appearance="filled-darker" display-shadow>
          <iqv-label slot="label">Filled darker with shadow</iqv-label>
        </iqv-textarea>
      </div>
      <div style="padding: 1rem; background-color: ${colorNeutralBackground3};">
        <iqv-textarea appearance="filled-lighter">
          <iqv-label slot="label">Filled lighter</iqv-label>
        </iqv-textarea>
      </div>
      <div style="padding: 1rem; background-color: ${colorNeutralBackground3};">
        <iqv-textarea appearance="filled-lighter" display-shadow>
          <iqv-label slot="label">Filled lighter with shadow</iqv-label>
        </iqv-textarea>
      </div>
    </div>
  `),
};

export const Block: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonTextArea>>`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <iqv-textarea>
          <iqv-label slot="label">Inline (default)</iqv-label>
        </iqv-textarea>
      </div>
      <div>
        <iqv-textarea block>
          <iqv-label slot="label">Block</iqv-label>
        </iqv-textarea>
      </div>
    </div>
  `),
};

export const Size: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonTextArea>>`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <iqv-textarea>
          <iqv-label slot="label">Medium (default)</iqv-label>
        </iqv-textarea>
      </div>
      <div>
        <iqv-textarea size="small">
          <iqv-label slot="label">Small</iqv-label>
        </iqv-textarea>
      </div>
      <div>
        <iqv-textarea size="large">
          <iqv-label slot="label">Large</iqv-label>
        </iqv-textarea>
      </div>
    </div>
  `),
};

export const AutoResize: Story = {
  args: {
    autoResize: true,
  },
};

export const Resize: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonTextArea>>`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <iqv-textarea resize="none">
          <iqv-label slot="label">None (default)</iqv-label>
        </iqv-textarea>
      </div>
      <div>
        <iqv-textarea resize="horizontal">
          <iqv-label slot="label">Horizontal</iqv-label>
        </iqv-textarea>
      </div>
      <div>
        <iqv-textarea resize="vertical">
          <iqv-label slot="label">Vertical</iqv-label>
        </iqv-textarea>
      </div>
      <div>
        <iqv-textarea resize="both">
          <iqv-label slot="label">Both</iqv-label>
        </iqv-textarea>
      </div>
    </div>
  `),
};

export const RTL: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonTextArea>>`
    <div style="display: flex; flex-direction: column; gap: 1rem;" dir="rtl">
      <div>
        <iqv-textarea resize="none">
          <iqv-label slot="label">None (default)</iqv-label>
        </iqv-textarea>
      </div>
      <div>
        <iqv-textarea resize="horizontal">
          <iqv-label slot="label">Horizontal</iqv-label>
        </iqv-textarea>
      </div>
      <div>
        <iqv-textarea resize="vertical">
          <iqv-label slot="label">Vertical</iqv-label>
        </iqv-textarea>
      </div>
      <div>
        <iqv-textarea resize="both">
          <iqv-label slot="label">Both</iqv-label>
        </iqv-textarea>
      </div>
    </div>
  `),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    resize: TextAreaResize.both,
    slottedContent: () => 'This textarea is disabled',
  },
};

export const Required: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonTextArea>>`
    <form id="required-form" action="#">
      <iqv-textarea slot="input" name="required-input" required>
        <iqv-label slot="label">Required Input</iqv-label>
      </iqv-textarea>
      <div><button type="submit">Submit</button></div>
    </form>
  `),
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    resize: TextAreaResize.both,
    slottedContent: () => 'Some content',
  },
};

export const WithHTMLCode: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonTextArea>>`
    <iqv-textarea auto-resize resize="both" size="large">
      <p>This text should show up as plain text.</p>
      <img src="logo.svg" alt="" />
      <script>
        alert(1);
      </script>
      <iqv-text>hello</iqv-text>
    </iqv-textarea>
  `),
};

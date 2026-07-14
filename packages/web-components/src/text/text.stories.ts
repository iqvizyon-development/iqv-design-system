import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { colorNeutralBackground6 } from '../theme/design-tokens.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Text as IqvizyonText } from './text.js';
import { TextAlign, TextFont, TextSize, TextWeight } from './text.options.js';

type Story = StoryObj<IqvizyonText>;
const { argTypes } = getStorybookHelpers<IqvizyonText>('iqv-text');

/**
 * Used to generate slotted content for stories
 * @param as - the element to generate
 * @param content - the content for the element
 * @returns ViewTemplate
 */
const generateSemanticElementTemplate = (as: string, content: string) => {
  switch (as) {
    case 'h1':
      return html`<h1>${content}</h1>`;
    case 'h2':
      return html`<h2>${content}</h2>`;
    case 'h3':
      return html`<h3>${content}</h3>`;
    case 'h4':
      return html`<h4>${content}</h4>`;
    case 'h5':
      return html`<h5>${content}</h5>`;
    case 'h6':
      return html`<h6>${content}</h6>`;
    case 'p':
      return html`<p>${content}</p>`;
    case 'pre':
      return html`<pre>${content}</pre>`;
    case 'span':
    default:
      return html`<span>${content}</span>`;
  }
};

const storyTemplate = html<StoryArgs<IqvizyonText>>`
  <iqv-text
    align=${story => story.align}
    font=${story => story.font}
    size=${story => story.size}
    weight=${story => story.weight}
    ?nowrap=${story => story.nowrap}
    ?truncate=${story => story.truncate}
    ?italic=${story => story.italic}
    ?underline=${story => story.underline}
    ?strikethrough=${story => story.strikethrough}
    ?block=${story => story.block}
    >${story => story.slottedContent?.()}</iqv-text
  >
`;

export default {
  title: 'Components/Text',
  render: renderComponent(storyTemplate),
  args: {
    slottedContent: () => html`${story => generateSemanticElementTemplate(story.as, 'text')}`,
  },
  argTypes: {
    ...argTypes,
    as: {
      name: 'Text wrapping element',
      description: 'The semantic element to use for the slotted content.',
      control: 'select',
      options: ['span', 'p', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        category: 'demo',
      },
    },
  },
} as Meta<IqvizyonText>;

export const Text: Story = {};

//
// Attribute stories
//

export const Nowrap: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonText>>`
    <iqv-text nowrap>
      <div style="display: block; width: 320px; border: 1px solid black;">
        This text will not wrap lines when it overflows the container.
      </div>
    </iqv-text>
  `),
};

export const Truncate: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonText>>`
    <iqv-text truncate nowrap>
      <div style="display: block; width: 320px; border: 1px solid black;">
        Setting <code>truncate</code> and <code>nowrap</code> will truncate when it overflows the container.
      </div>
    </iqv-text>
  `),
};

export const Italic: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonText>>`
    <iqv-text italic>
      <span>Italics are emphasized text.</span>
    </iqv-text>
  `),
};

export const Underline: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonText>>`
    <iqv-text underline>
      <span>Underlined text draws the reader's attention to the words.</span>
    </iqv-text>
  `),
};

export const Strikethrough: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonText>>`
    <iqv-text strikethrough>
      <span>Strikethrough text is used to indicate something that is no longer relevant.</span>
    </iqv-text>
  `),
};

export const Block: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonText>>`
    <span>
      <iqv-text style="background: ${colorNeutralBackground6}"
        ><span>Iqvizyon text is inline by default. Setting</span></iqv-text
      >
      <iqv-text style="background: ${colorNeutralBackground6}" block><span>block</span></iqv-text>
      <iqv-text style="background: ${colorNeutralBackground6}"
        ><span>will make it behave as a block element.</span></iqv-text
      >
    </span>
  `),
};

export const Size: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonText>>`
    <div>
      <iqv-text block size="100"><span>100</span></iqv-text>
      <iqv-text block size="200"><span>200</span></iqv-text>
      <iqv-text block size="300"><span>300</span></iqv-text>
      <iqv-text block size="400"><span>400</span></iqv-text>
      <iqv-text block size="500"><span>500</span></iqv-text>
      <iqv-text block size="600"><span>600</span></iqv-text>
      <iqv-text block size="700"><span>700</span></iqv-text>
      <iqv-text block size="800"><span>800</span></iqv-text>
      <iqv-text block size="900"><span>900</span></iqv-text>
      <iqv-text block size="1000"><span>1000</span></iqv-text>
    </div>
  `),
};

export const Weight: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonText>>`
    <div>
      <iqv-text block weight="regular"><span>This text is regular.</span></iqv-text>
      <iqv-text block weight="medium"><span>This text is medium.</span></iqv-text>
      <iqv-text block weight="semibold"><span>This text is semibold.</span></iqv-text>
      <iqv-text block weight="bold"><span>This text is bold.</span></iqv-text>
    </div>
  `),
};

export const Align: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonText>>`
    <div
      style="display: flex; flex-direction: column; gap: 20px; width: 320px; border-left: 1px solid #000; border-right: 1px solid #000;"
    >
      <iqv-text block align="start">
        <span>Start aligned block.</span>
      </iqv-text>
      <iqv-text block align="end">
        <span>End aligned block.</span>
      </iqv-text>
      <iqv-text block align="center">
        <span>Center aligned block.</span>
      </iqv-text>
      <iqv-text block align="justify">
        <span>Justify aligned block text stretches wrapped lines to meet container edges.</span>
      </iqv-text>
    </div>
  `),
};

export const Font: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonText>>`
    <div>
      <iqv-text block font="base"><span>Font base.</span></iqv-text>
      <iqv-text block font="numeric"><span>Font numeric 0123456789.</span></iqv-text>
      <iqv-text block font="monospace"><span>Font monospace.</span></iqv-text>
    </div>
  `),
};

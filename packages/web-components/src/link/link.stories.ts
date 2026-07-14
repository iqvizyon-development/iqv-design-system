import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { AnchorTarget } from '../anchor-button/anchor-button.options.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Link as IqvizyonLink } from './link.js';
import { LinkAppearance } from './link.options.js';

type Story = StoryObj<IqvizyonLink>;
const { argTypes } = getStorybookHelpers<IqvizyonLink>('iqv-link');

const storyTemplate = html<StoryArgs<IqvizyonLink>>`
  <iqv-link
    href="${story => story.href}"
    hreflang="${story => story.hreflang}"
    referrerpolicy="${story => story.referrerpolicy}"
    rel="${story => story.rel}"
    type="${story => story.type}"
    target="${story => story.target}"
    inline="${story => story.inline}"
    appearance="${story => story.appearance}"
  >
    ${story => story.slottedContent?.()}
  </iqv-link>
`;

export default {
  title: 'Components/Link',
  render: renderComponent(storyTemplate),
  args: {
    slottedContent: () => 'Link',
    href: '#',
  },
  argTypes,
} as Meta<IqvizyonLink>;

export const Default = {};

export const Appearance: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonLink>>`
    <iqv-link href="#" appearance="subtle">Subtle</iqv-link>
  `),
};

export const Inline: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonLink>>`
    <style>
      h4,
      p {
        color: var(--colorNeutralForeground1);
      }
    </style>
    <iqv-text
      ><p>
        This is an <iqv-link href="#" inline>inline link</iqv-link> used alongside text within the
        <code>iqv-text</code> component.
      </p></iqv-text
    >
    <p>This is an <iqv-link href="#" inline>inline link</iqv-link> used alongside a <code>p</code> element.</p>
    <h4>
      This is an <iqv-link href="#">inline link without the inline attribute</iqv-link> within a
      <code>h4</code> element. In Chromium browsers, the link inherits without the use of the
      <code>inline</code> attribute.
    </h4>
  `),
};

export const Wrapping: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonLink>>`
    <style>
      .max-width {
        display: block;
        width: 250px;
        color: var(--colorNeutralForeground1);
      }
    </style>
    <p class="max-width">
      This paragraph contains a link which is very long.
      <iqv-link href="#">Iqvizyon links wrap correctly between lines when they are very long.</iqv-link> This is
      because they are inline elements.
    </p>
  `),
};

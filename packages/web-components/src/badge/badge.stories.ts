import { html, when } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Badge as IqvizyonBadge } from './badge.js';
import { BadgeAppearance, BadgeColor, BadgeShape, BadgeSize } from './badge.options.js';

type Story = StoryObj<IqvizyonBadge>;
const { argTypes } = getStorybookHelpers<IqvizyonBadge>('iqv-badge');

const storyTemplate = html<StoryArgs<IqvizyonBadge>>`
  <iqv-badge
    appearance="${story => story.appearance}"
    color="${story => story.color}"
    shape="${story => story.shape}"
    size="${story => story.size}"
  >
    ${story => story.startSlottedContent?.()} ${story => story.slottedContent?.()}
    ${story => story.endSlottedContent?.()}
  </iqv-badge>
`;

export default {
  title: 'Components/Badge/Badge',
  render: renderComponent(storyTemplate),
  args: {
    appearance: BadgeAppearance.filled,
    color: BadgeColor.brand,
    shape: BadgeShape.circular,
    size: BadgeSize.medium,
    slottedContent: () => 'Badge',
  },
  argTypes,
} as Meta<IqvizyonBadge>;

export const Default: Story = {};

export const SlottedContent: Story = {
  args: {
    slottedContent: () => 'Badge',
  },
};

export const IconStart: Story = {
  args: {
    startSlottedContent: () => html`<svg
      slot="start"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M14.69 11.503c1 0 1.81.81 1.81 1.81v.689h-.005c-.034.78-.248 1.757-1.123 2.555C14.416 17.43 12.765 18 10 18c-2.766 0-4.416-.57-5.372-1.443c-.875-.798-1.089-1.776-1.123-2.555H3.5v-.69c0-.999.81-1.809 1.81-1.809h9.38ZM6.5 3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h7A1.5 1.5 0 0 0 15 8.5v-4A1.5 1.5 0 0 0 13.5 3h-3v-.5A.48.48 0 0 0 10 2c-.276 0-.5.23-.5.5V3h-3ZM7 6.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0Z"
      />
    </svg>`,
    slottedContent: () => 'Badge',
  },
};

export const IconEnd: Story = {
  args: {
    startSlottedContent: () => html`<svg
      slot="end"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M14.69 11.503c1 0 1.81.81 1.81 1.81v.689h-.005c-.034.78-.248 1.757-1.123 2.555C14.416 17.43 12.765 18 10 18c-2.766 0-4.416-.57-5.372-1.443c-.875-.798-1.089-1.776-1.123-2.555H3.5v-.69c0-.999.81-1.809 1.81-1.809h9.38ZM6.5 3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h7A1.5 1.5 0 0 0 15 8.5v-4A1.5 1.5 0 0 0 13.5 3h-3v-.5A.48.48 0 0 0 10 2c-.276 0-.5.23-.5.5V3h-3ZM7 6.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0Z"
      />
    </svg>`,
    slottedContent: () => 'Badge',
  },
};

export const Appearance: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonBadge>>`
    <iqv-badge appearance="filled">filled</iqv-badge>
    <iqv-badge appearance="ghost">ghost</iqv-badge>
    <iqv-badge appearance="outline">outline</iqv-badge>
    <iqv-badge appearance="tint">tint</iqv-badge>
  `),
};

export const Color: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonBadge>>`
    <iqv-badge color="brand">brand</iqv-badge>
    <iqv-badge color="danger">danger</iqv-badge>
    <iqv-badge color="important">important</iqv-badge>
    <iqv-badge color="informative">informative</iqv-badge>
    <iqv-badge color="severe">severe</iqv-badge>
    <iqv-badge color="subtle">subtle</iqv-badge>
    <iqv-badge color="success">success</iqv-badge>
    <iqv-badge color="warning">warning</iqv-badge>
  `),
};

export const Shape: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonBadge>>`
    <iqv-badge shape="circular"></iqv-badge>
    <iqv-badge shape="rounded"></iqv-badge>
    <iqv-badge shape="square"></iqv-badge>
  `),
};

export const Size = {
  render: renderComponent(html<StoryArgs<IqvizyonBadge>>`
    <iqv-badge size="tiny"></iqv-badge>
    <iqv-badge size="extra-small"></iqv-badge>
    <iqv-badge size="small"></iqv-badge>
    <iqv-badge size="medium"></iqv-badge>
    <iqv-badge size="large"></iqv-badge>
    <iqv-badge size="extra-large"></iqv-badge>
  `),
};

import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { CounterBadge as IqvizyonCounterBadge } from './counter-badge.js';
import {
  CounterBadgeAppearance,
  CounterBadgeColor,
  CounterBadgeShape,
  CounterBadgeSize,
} from './counter-badge.options.js';

type Story = StoryObj<IqvizyonCounterBadge>;
const { argTypes } = getStorybookHelpers<IqvizyonCounterBadge>('iqv-counter-badge');

const storyTemplate = html<StoryArgs<IqvizyonCounterBadge>>`
  <iqv-counter-badge
    appearance="${story => story.appearance}"
    color="${story => story.color}"
    shape="${story => story.shape}"
    size="${story => story.size}"
    count="${story => story.count}"
    overflow-count="${story => story.overflowCount}"
    ?show-zero="${story => story.showZero}"
    ?dot="${story => story.dot}"
  >
    ${story => story.startSlottedContent?.()} ${story => story.endSlottedContent?.()}
  </iqv-counter-badge>
`;

export default {
  title: 'Components/Badge/Counter Badge',
  render: renderComponent(storyTemplate),
  argTypes,
} as Meta<IqvizyonCounterBadge>;

export const Default: Story = {};

export const Appearance: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonCounterBadge>>`
    <iqv-counter-badge count="5" appearance="filled"></iqv-counter-badge>
    <iqv-counter-badge count="5" appearance="ghost"></iqv-counter-badge>
  `),
};

export const Color: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonCounterBadge>>`
    <iqv-counter-badge count="5" color="brand"></iqv-counter-badge>
    <iqv-counter-badge count="5" color="danger"></iqv-counter-badge>
    <iqv-counter-badge count="5" color="important"></iqv-counter-badge>
    <iqv-counter-badge count="5" color="informative"></iqv-counter-badge>
    <iqv-counter-badge count="5" color="severe"></iqv-counter-badge>
    <iqv-counter-badge count="5" color="subtle"></iqv-counter-badge>
    <iqv-counter-badge count="5" color="success"></iqv-counter-badge>
    <iqv-counter-badge count="5" color="warning"></iqv-counter-badge>
  `),
};

export const Shape: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonCounterBadge>>`
    <iqv-counter-badge count="5" shape="circular"></iqv-counter-badge>
    <iqv-counter-badge count="5" shape="rounded"></iqv-counter-badge>
  `),
};

export const Size: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonCounterBadge>>`
    <iqv-counter-badge size="tiny"></iqv-counter-badge>
    <iqv-counter-badge size="extra-small"></iqv-counter-badge>
    <iqv-counter-badge size="small"></iqv-counter-badge>
    <iqv-counter-badge size="medium"></iqv-counter-badge>
    <iqv-counter-badge size="large"></iqv-counter-badge>
    <iqv-counter-badge size="extra-large"></iqv-counter-badge>
  `),
};

export const Dot: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonCounterBadge>>`<iqv-counter-badge dot></iqv-counter-badge>`),
};

export const ShowZero: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonCounterBadge>>`<iqv-counter-badge show-zero></iqv-counter-badge>`),
};

export const Start: Story = {
  // prettier-ignore
  render: renderComponent(html<StoryArgs<IqvizyonCounterBadge>>`
    <iqv-counter-badge count="5" shape="circular"><svg
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
      </svg></iqv-counter-badge>
  `),
};

export const End: Story = {
  // prettier-ignore
  render: renderComponent(html<StoryArgs<IqvizyonCounterBadge>>`
    <iqv-counter-badge count="5" shape="circular"><svg
        fill="currentColor"
        slot="end"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      ><path
          d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
          fill="currentColor"
        >
      </path>
    </svg></iqv-counter-badge>
  `),
};

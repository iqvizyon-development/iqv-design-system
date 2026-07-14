import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { AnchorButton as IqvizyonAnchorButton } from './anchor-button.js';
import { AnchorButtonAppearance, AnchorButtonShape, AnchorButtonSize, AnchorTarget } from './anchor-button.options.js';

type Story = StoryObj<IqvizyonAnchorButton>;
const { argTypes } = getStorybookHelpers<IqvizyonAnchorButton>('iqv-anchor-button');

const storyTemplate = html<StoryArgs<IqvizyonAnchorButton>>`
  <iqv-anchor-button
    href="${story => story.href}"
    hreflang="${story => story.hreflang}"
    referrerpolicy="${story => story.referrerpolicy}"
    rel="${story => story.rel}"
    type="${story => story.type}"
    target="${story => story.target || void 0}"
    appearance="${story => story.appearance}"
    shape="${story => story.shape}"
    size="${story => story.size}"
    ?icon-only="${story => story.iconOnly}"
  >
    ${story => story.startSlottedContent?.()} ${story => story.slottedContent?.()}
    ${story => story.endSlottedContent?.()}
  </iqv-anchor-button>
`;

export default {
  title: 'Components/Button/Anchor',
  render: renderComponent(storyTemplate),
  args: {
    href: '#',
    slottedContent: () => 'Anchor',
  },
  argTypes,
} as Meta<IqvizyonAnchorButton>;

export const Default: Story = {};

export const Appearance: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAnchorButton>>`
    <iqv-anchor-button href="#">Default</iqv-anchor-button>
    <iqv-anchor-button href="#" appearance="primary">Primary</iqv-anchor-button>
    <iqv-anchor-button href="#" appearance="outline">Outline</iqv-anchor-button>
    <iqv-anchor-button href="#" appearance="subtle">Subtle</iqv-anchor-button>
    <iqv-anchor-button href="#" appearance="transparent">Transparent</iqv-anchor-button>
  `),
};

export const Shape: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAnchorButton>>`
    <iqv-anchor-button href="#" shape="rounded">Rounded</iqv-anchor-button>
    <iqv-anchor-button href="#" shape="circular">Circular</iqv-anchor-button>
    <iqv-anchor-button href="#" shape="square">Square</iqv-anchor-button>
  `),
};

export const Size: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAnchorButton>>`
    <iqv-anchor-button href="#" size="small">Small</iqv-anchor-button>
    <iqv-anchor-button href="#" size="small" icon>
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
    </iqv-anchor-button>
    <iqv-anchor-button href="#" size="small" icon-only aria-label="Small icon only button"
      ><svg
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
    </iqv-anchor-button>
    <iqv-anchor-button href="#" size="medium">Medium</iqv-anchor-button>
    <iqv-anchor-button href="#" size="medium" icon>
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
    </iqv-anchor-button>
    <iqv-anchor-button href="#" size="medium" icon-only aria-label="Medium icon only button"
      ><svg
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
    </iqv-anchor-button>
    <iqv-anchor-button href="#" size="large">Large</iqv-anchor-button>
    <iqv-anchor-button href="#" size="large" icon
      ><svg
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
    </iqv-anchor-button>
    <iqv-anchor-button href="#" size="large" icon-only aria-label="Large icon only button"
      ><svg
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
    </iqv-anchor-button>
  `),
};

export const WithLongText: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAnchorButton>>`
    <style>
      .max-width {
        width: 280px;
      }
    </style>
    <iqv-anchor-button href="#">Short text</iqv-anchor-button>
    <iqv-anchor-button href="#" class="max-width"
      >Long text wraps after it hits the max width of the component</iqv-anchor-button
    >
  `),
};

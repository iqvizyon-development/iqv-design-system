import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Menu as IqvizyonMenu } from './menu.js';

type Story = StoryObj<IqvizyonMenu>;
const { argTypes } = getStorybookHelpers<IqvizyonMenu>('iqv-menu');

const defaultSlottedContent = html`
  <iqv-menu-list>
    <iqv-menu-item>Menu item 1</iqv-menu-item>
    <iqv-menu-item>Menu item 2</iqv-menu-item>
    <iqv-menu-item>Menu item 3</iqv-menu-item>
    <iqv-menu-item>Menu item 4</iqv-menu-item>
  </iqv-menu-list>
`;

const defaultTriggerSlottedContent = html`<iqv-menu-button
  aria-label="Toggle Menu"
  appearance="primary"
  slot="trigger"
  >Toggle Menu</iqv-menu-button
>`;

const storyTemplate = html<StoryArgs<IqvizyonMenu>>`
  <iqv-menu
    ?split="${story => story.split}"
    ?open-on-hover="${story => story.openOnHover}"
    ?open-on-context="${story => story.openOnContext}"
    ?close-on-scroll="${story => story.closeOnScroll}"
    ?persist-on-item-click="${story => story.persistOnItemClick}"
    style="${story => (story['--menu-max-height'] !== '' ? `--menu-max-height: ${story['--menu-max-height']};` : '')}"
  >
    ${story => story.primaryActionSlottedContent?.()} ${story => story.triggerSlottedContent?.()}
    ${story => story.slottedContent?.()}
  </iqv-menu>
`;

const generatePimaryActionSlottedContent = (content: string = 'Primary Action') => {
  return html`<iqv-button appearance="primary" slot="primary-action">${content}</iqv-button>`;
};

export default {
  title: 'Components/Menu',
  render: renderComponent(storyTemplate),
  args: {
    slottedContent: () => defaultSlottedContent,
    triggerSlottedContent: () => defaultTriggerSlottedContent,
    '--menu-max-height': 'auto',
  },
  argTypes,
} as Meta<IqvizyonMenu>;

export const Default: Story = {};

export const MenuOpenOnHover: Story = {
  args: {
    openOnHover: true,
  },
};

export const MenuOpenOnContext: Story = {
  args: {
    openOnContext: true,
  },
};

export const MenuWithMaxHeight: Story = {
  args: {
    '--menu-max-height': '10rem',
    slottedContent: () => html`<iqv-menu-list>
      <iqv-menu-item>Menu item 1</iqv-menu-item>
      <iqv-menu-item>Menu item 2</iqv-menu-item>
      <iqv-menu-item>Menu item 3</iqv-menu-item>
      <iqv-menu-item>Menu item 4</iqv-menu-item>
      <iqv-menu-item>Menu item 5</iqv-menu-item>
      <iqv-menu-item>Menu item 6</iqv-menu-item>
      <iqv-menu-item>Menu item 7</iqv-menu-item>
      <iqv-menu-item>Menu item 8</iqv-menu-item>
    </iqv-menu-list>`,
  },
};

export const MenuWithInteractiveItems: Story = {
  args: {
    slottedContent: () => html`
      <iqv-menu-list>
        <iqv-menu-item>
          Item 1
          <iqv-menu-list slot="submenu">
            <iqv-menu-item> Subitem 1 </iqv-menu-item>
            <iqv-menu-item> Subitem 2 </iqv-menu-item>
          </iqv-menu-list>
        </iqv-menu-item>

        <iqv-menu-item role="menuitemcheckbox"> Item 2 </iqv-menu-item>
        <iqv-menu-item role="menuitemcheckbox"> Item 3 </iqv-menu-item>

        <iqv-divider role="separator" aria-orientation="horizontal" orientation="horizontal"></iqv-divider>

        <iqv-menu-item>Menu item 4</iqv-menu-item>
        <iqv-menu-item>Menu item 5</iqv-menu-item>
        <iqv-menu-item>Menu item 6</iqv-menu-item>

        <iqv-menu-item>Menu item 7</iqv-menu-item>
        <iqv-menu-item>Menu item 8</iqv-menu-item>
      </iqv-menu-list>
    `,
  },
};

const link = '<a href="/docs/components-button-split-button--docs">split-button</a>';

const storyDescription = `
  The split-button variation, refer to ${link} for more examples.
`;

export const SplitButton: Story = {
  parameters: {
    docs: {
      description: {
        story: storyDescription,
      },
    },
  },
  args: {
    split: true,
    triggerSlottedContent: () => html`<iqv-menu-button
      aria-label="Toggle Menu"
      appearance="primary"
      slot="trigger"
      icon-only
    ></iqv-menu-button>`,
    primaryActionSlottedContent: () => html`${generatePimaryActionSlottedContent()}`,
  },
};

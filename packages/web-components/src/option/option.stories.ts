import { html, repeat } from '@microsoft/fast-element';
import type { Meta, StoryArgs, StoryObj } from '../helpers.stories.js';
import { renderComponent } from '../helpers.stories.js';
import { toggleState } from '../utils/element-internals.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import { DropdownOption as IqvizyonDropdownOption } from './option.js';

type Story = StoryObj<IqvizyonDropdownOption>;
const { argTypes } = getStorybookHelpers<IqvizyonDropdownOption>('iqv-dropdown-option');

const storyTemplate = html<StoryArgs<IqvizyonDropdownOption>>`
  <iqv-option
    ?selected="${story => story.selected}"
    ?disabled="${story => story.disabled}"
    id="${story => story.id}"
    name="${story => story.name}"
    ?required="${story => story.required}"
    slot="${story => story.slot}"
    text="${story => story.text}"
  >
    ${story => story.startSlottedContent?.()}${story => story.slottedContent?.()}${story =>
      story.descriptionSlottedContent?.()}
  </iqv-option>
`;

export default {
  title: 'Components/Dropdown/Option',
  render: renderComponent(storyTemplate),
  args: {
    disabled: false,
  },
  argTypes,
  decorators: [
    Story => {
      const story = Story() as DocumentFragment | IqvizyonDropdownOption;
      if (story instanceof DocumentFragment) {
        story.querySelectorAll<IqvizyonDropdownOption>('[id$="multiple"]').forEach(option => {
          toggleState(option.elementInternals, 'multiple', true);
        });
        return story;
      }

      if (story.matches('[id$="multiple"]')) {
        toggleState(story.elementInternals, 'multiple', true);
      }

      return story;
    },
  ],
} as Meta<IqvizyonDropdownOption>;

export const Default: Story = {
  args: {
    slottedContent: () => 'Option',
  },
};

export const Multiple: Story = {
  args: {
    id: 'multiple',
    slottedContent: () => 'Multiple selection mode',
  },
};

export const Selected: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonDropdownOption>>`
    ${repeat(
      [{ selected: true, id: 'selected-single', slottedContent: () => 'Selected' }],
      html<IqvizyonDropdownOption>`${storyTemplate}<br />`,
    )}
  `),
};

export const SelectedMultiple: Story = {
  args: { id: 'selected-multiple', selected: true, slottedContent: () => 'Selected (multiple selection mode)' },
};

export const Disabled: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonDropdownOption>>`
    ${repeat(
      [
        { id: 'disabled-unselected-single', disabled: true, slottedContent: () => 'Disabled unselected' },
        { selected: true, disabled: true, id: 'disabled-selected-single', slottedContent: () => 'Disabled selected' },
      ],
      html<IqvizyonDropdownOption>`${storyTemplate}<br />`,
    )}
  `),
};

export const DisabledMultiple: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonDropdownOption>>`
    ${repeat(
      [
        {
          selected: false,
          disabled: true,
          id: 'disabled-unselected-multiple',
          slottedContent: () => 'Disabled unselected',
        },
        {
          selected: true,
          disabled: true,
          id: 'disabled-selected-multiple',
          slottedContent: () => 'Disabled selected',
        },
      ],
      html<IqvizyonDropdownOption>`${storyTemplate}<br />`,
    )}
  `),
};

export const startContent: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonDropdownOption>>`
    ${repeat(
      [
        {
          id: 'start-content-16px-avatar',
          selected: true,
          slottedContent: () => 'Option with 16px avatar',
          startSlottedContent: () => html`<iqv-avatar slot="start" size="16" color="blue">16</iqv-avatar>`,
        },
        {
          id: 'start-content-24px-avatar',
          selected: true,
          slottedContent: () => 'Option with 24px avatar',
          startSlottedContent: () => html`<iqv-avatar slot="start" size="24" color="blue">24</iqv-avatar>`,
        },
        {
          id: 'start-content-32px-with-description',
          selected: true,
          slottedContent: () => 'Option with 32px avatar',
          descriptionSlottedContent: () =>
            html`<span slot="description">Additional information is slotted in the description slot</span>`,
          startSlottedContent: () => html` <iqv-avatar slot="start" size="32" color="blue">32</iqv-avatar> `,
        },
      ],
      html<IqvizyonDropdownOption>`${storyTemplate}<br />`,
    )}
  `),
};

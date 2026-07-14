import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { AccordionItem as IqvizyonAccordionItem } from './accordion-item.js';
import { AccordionItemMarkerPosition, AccordionItemSize } from './accordion-item.options.js';

type Story = StoryObj<IqvizyonAccordionItem>;
const { argTypes } = getStorybookHelpers<IqvizyonAccordionItem>('iqv-accordion-item');

const storyTemplate = html<StoryArgs<IqvizyonAccordionItem>>`
  <iqv-accordion-item
    heading-level="${story => story.headinglevel}"
    marker-position="${story => story.markerPosition}"
    size="${story => story.size}"
    ?disabled="${story => story.disabled}"
    ?expanded="${story => story.expanded}"
    ?block="${story => story.block}"
  >
    ${story => story.headingSlottedContent?.()} ${story => story.slottedContent?.()}
  </iqv-accordion-item>
`;

export default {
  title: 'Components/Accordion/AccordionItem',
  render: renderComponent(storyTemplate),
  args: {
    headingSlottedContent: () => html`<span slot="heading">Accordion Item</span>`,
    slottedContent: () => 'Content',
  },
  argTypes,
} as Meta<IqvizyonAccordionItem>;

export const Default: Story = {
  args: {
    expanded: true,
    headinglevel: 2,
    headingSlottedContent: () => html`<span slot="heading">Description</span>`,
    slottedContent: () => html`
      <iqv-text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia bibendum metus, commodo dapibus erat.
          Aliquam venenatis gravida malesuada. Maecenas ut porttitor justo, sed euismod ex. Suspendisse sodales enim
          sem, in auctor risus aliquam ac. Cras ut velit lacinia diam varius fermentum. Sed sed augue tempus, rhoncus
          neque vestibulum, placerat risus.
        </p>
      </iqv-text>
    `,
  },
};

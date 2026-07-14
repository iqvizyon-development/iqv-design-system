import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Image as IqvizyonImage } from './image.js';
import { ImageFit, ImageShape } from './image.options.js';

type Story = StoryObj<IqvizyonImage>;
const { argTypes } = getStorybookHelpers<IqvizyonImage>('iqv-image');

const imageTemplate = html<StoryArgs<IqvizyonImage>>`
  <iqv-image
    ?block="${story => story.block}"
    ?bordered="${story => story.bordered}"
    fit="${story => story.fit}"
    ?shadow="${story => story.shadow}"
    shape="${story => story.shape}"
  >
    ${story => story.slottedContent?.()}
  </iqv-image>
`;

export default {
  title: 'Components/Image',
  render: renderComponent(imageTemplate),
  args: {
    slottedContent: () => html`<img alt="Short image description" src="300x100.png" />`,
  },
  argTypes,
} as Meta<IqvizyonImage>;

export const Default = {};

// Block layout
const imageLayoutBlock = html<StoryArgs<IqvizyonImage>>`
  <div style="border: 1px dotted #43ED35;">
    <iqv-image block bordered>
      <img role="presentation" src="958x20.png" />
      <img role="presentation" src="100x100.png" />
    </iqv-image>
  </div>
`;
export const BlockLayout: Story = { render: renderComponent(imageLayoutBlock) };

// Fit: None
const imageFitNoneLarge = html<StoryArgs<IqvizyonImage>>`
  <div style="height: 200px; width: 300px; border: 1px dotted #43ED35;">
    <iqv-image bordered fit="none">
      <img role="presentation" src="600x200.png" />
    </iqv-image>
  </div>
`;
export const ImageFitNoneLarge: Story = { render: renderComponent(imageFitNoneLarge).bind({}) };

const imageFitNoneSmall = html<StoryArgs<IqvizyonImage>>`
  <div style="height: 200px; width: 300px; border: 1px dotted #43ED35;">
    <iqv-image bordered fit="none">
      <img alt="200x100 placeholder" src="200x100.png" />
    </iqv-image>
  </div>
`;
export const ImageFitNoneSmall: Story = { render: renderComponent(imageFitNoneSmall).bind({}) };

// Fit: Center
const imageFitCenterLarge = html<StoryArgs<IqvizyonImage>>`
  <div style="height: 200px; width: 300px; border: 1px dotted #43ED35;">
    <iqv-image fit="center">
      <img role="presentation" src="600x200.png" />
    </iqv-image>
  </div>
`;
export const ImageFitCenterLarge: Story = { render: renderComponent(imageFitCenterLarge).bind({}) };

const imageFitCenterSmall = html<StoryArgs<IqvizyonImage>>`
  <div style="height: 200px; width: 300px; border: 1px dotted #43ED35;">
    <iqv-image fit="center">
      <img alt="image layout story" src="300x100.png" />
    </iqv-image>
  </div>
`;
export const ImageFitCenterSmall: Story = { render: renderComponent(imageFitCenterSmall).bind({}) };

const imageFitContain = html<StoryArgs<IqvizyonImage>>`
  <div style="height:200px; width: 300px; border: 1px dotted #43ED35;">
    <iqv-image bordered fit="contain">
      <img alt="image layout story" src="400x200.png" />
    </iqv-image>
  </div>
`;
export const ImageFitContain: Story = { render: renderComponent(imageFitContain).bind({}) };

const imageFitContainTall = html<StoryArgs<IqvizyonImage>>`
  <div style="height: 250px; width: 400px; border: 1px dotted #43ED35;">
    <iqv-image bordered fit="contain">
      <img alt="image layout story" src="400x200.png" />
    </iqv-image>
  </div>
`;
export const ImageFitContainTall: Story = { render: renderComponent(imageFitContainTall).bind({}) };

const imageFitContainWide = html<StoryArgs<IqvizyonImage>>`
  <div style="height: 200px; width: 450px; border: 1px dotted #43ED35;">
    <iqv-image bordered fit="contain">
      <img alt="image layout story" src="400x200.png" />
    </iqv-image>
  </div>
`;
export const ImageFitContainWide: Story = { render: renderComponent(imageFitContainWide).bind({}) };

// Fit: Cover
const imageFitCoverSmall = html<StoryArgs<IqvizyonImage>>`
  <div style="height: 200px; width: 400px; border: 1px dotted #43ED35;">
    <iqv-image bordered fit="cover">
      <img alt="image layout story" src="400x250.png" />
    </iqv-image>
  </div>
`;
export const ImageFitCoverSmall: Story = { render: renderComponent(imageFitCoverSmall).bind({}) };

const imageFitCoverMedium = html<StoryArgs<IqvizyonImage>>`
  <div style="height: 200px; width: 400px; border: 1px dotted #43ED35;">
    <iqv-image bordered fit="cover">
      <img alt="image layout story" src="400x300.png" />
    </iqv-image>
  </div>
`;
export const ImageFitCoverMedium: Story = { render: renderComponent(imageFitCoverMedium).bind({}) };

const imageFitCoverLarge = html<StoryArgs<IqvizyonImage>>`
  <div style="height: 200px; width: 400px; border: 1px dotted #43ED35;">
    <iqv-image bordered fit="cover">
      <img alt="image layout story" src="600x200.png" />
    </iqv-image>
  </div>
`;
export const ImageFitCoverLarge: Story = { render: renderComponent(imageFitCoverLarge).bind({}) };

// Fit: Default
const imageFitDefault = html<StoryArgs<IqvizyonImage>>`
  <div style="height: 210px; width: 650px; border: 1px dotted #43ED35;">
    <iqv-image bordered fit="default">
      <img alt="image layout story" src="150x150.png" />
    </iqv-image>
  </div>
`;
export const ImageFitDefault: Story = { render: renderComponent(imageFitDefault).bind({}) };

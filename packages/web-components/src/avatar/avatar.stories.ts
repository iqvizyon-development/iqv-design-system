import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Avatar as IqvizyonAvatar } from './avatar.js';
import { AvatarActive, AvatarAppearance, AvatarColor, AvatarShape, AvatarSize } from './avatar.options.js';

type Story = StoryObj<IqvizyonAvatar>;
const { argTypes } = getStorybookHelpers<IqvizyonAvatar>('iqv-avatar');

const storyTemplate = html<StoryArgs<IqvizyonAvatar>>`
  <iqv-avatar
    appearance="${story => story.appearance}"
    active="${story => story.active}"
    color="${story => story.color}"
    shape="${story => story.shape}"
    size="${story => story.size}"
    initials="${story => story.initials}"
    name="${story => story.name}"
  >
    ${story => story.slottedContent?.()} ${story => story.badgeSlottedContent?.()}
  </iqv-avatar>
`;

export default {
  title: 'Components/Avatar',
  render: renderComponent(storyTemplate),
  argTypes,
} as Meta<IqvizyonAvatar>;

export const Default: Story = {};

export const Image: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>`<iqv-avatar>
    <img
      alt="Persona test"
      role="presentation"
      aria-hidden="true"
      src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg"
    />
  </iqv-avatar>`),
};

export const Icon: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>`
    <iqv-avatar>
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM7.5 4.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm8-.5a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm-10 0a1 1 0 112 0 1 1 0 01-2 0zm1-2a2 2 0 100 4 2 2 0 000-4zm.6 12H5a2 2 0 01-2-2V9.25c0-.14.11-.25.25-.25h1.76c.04-.37.17-.7.37-1H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 003.4 2.97 4.96 4.96 0 01-.3-.97zm9.5.97A3 3 0 0018 13V9.25C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1h1.76c.14 0 .25.11.25.25V13a2 2 0 01-2.1 2c-.07.34-.17.66-.3.97zM7.25 8C6.56 8 6 8.56 6 9.25V14a4 4 0 008 0V9.25C14 8.56 13.44 8 12.75 8h-5.5zM7 9.25c0-.14.11-.25.25-.25h5.5c.14 0 .25.11.25.25V14a3 3 0 11-6 0V9.25z"
          fill="currentColor"
        ></path>
      </svg>
    </iqv-avatar>
  `),
};

export const Badge: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>` <iqv-avatar name="Lydia Bauer"
    ><iqv-badge slot="badge" size="extra-small"></iqv-badge
  ></iqv-avatar>`),
};

export const ColorBrand: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>`<iqv-avatar color="brand"></iqv-avatar>`),
};

export const Color: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <iqv-avatar color="neutral" name="Neutral avatar"></iqv-avatar>
      <iqv-avatar color="brand" name="Brand avatar"></iqv-avatar>
      <iqv-avatar color="dark-red" name="dark-red avatar"></iqv-avatar>
      <iqv-avatar color="cranberry" name="cranberry avatar"></iqv-avatar>
      <iqv-avatar color="red" name="red avatar"></iqv-avatar>
      <iqv-avatar color="pumpkin" name="pumpkin avatar"></iqv-avatar>
      <iqv-avatar color="peach" name="peach avatar"></iqv-avatar>
      <iqv-avatar color="marigold" name="marigold avatar"></iqv-avatar>
      <iqv-avatar color="gold" name="gold avatar"></iqv-avatar>
      <iqv-avatar color="brass" name="brass avatar"></iqv-avatar>
      <iqv-avatar color="brown" name="brown avatar"></iqv-avatar>
      <iqv-avatar color="forest" name="forest avatar"></iqv-avatar>
      <iqv-avatar color="seafoam" name="seafoam avatar"></iqv-avatar>
      <iqv-avatar color="dark-green" name="dark-green avatar"></iqv-avatar>
      <iqv-avatar color="light-teal" name="light-teal avatar"></iqv-avatar>
      <iqv-avatar color="teal" name="teal avatar"></iqv-avatar>
      <iqv-avatar color="steel" name="steel avatar"></iqv-avatar>
      <iqv-avatar color="blue" name="blue avatar"></iqv-avatar>
      <iqv-avatar color="royal-blue" name="royal-blue avatar"></iqv-avatar>
      <iqv-avatar color="cornflower" name="cornflower avatar"></iqv-avatar>
      <iqv-avatar color="navy" name="navy avatar"></iqv-avatar>
      <iqv-avatar color="lavender" name="lavender avatar"></iqv-avatar>
      <iqv-avatar color="purple" name="purple avatar"></iqv-avatar>
      <iqv-avatar color="grape" name="grape avatar"></iqv-avatar>
      <iqv-avatar color="lilac" name="lilac avatar"></iqv-avatar>
      <iqv-avatar color="pink" name="pink avatar"></iqv-avatar>
      <iqv-avatar color="magenta" name="magenta avatar"></iqv-avatar>
      <iqv-avatar color="plum" name="plum avatar"></iqv-avatar>
      <iqv-avatar color="beige" name="beige avatar"></iqv-avatar>
      <iqv-avatar color="mink" name="mink avatar"></iqv-avatar>
      <iqv-avatar color="platinum" name="platinum avatar"></iqv-avatar>
      <iqv-avatar color="anchor" name="anchor avatar"></iqv-avatar>
    </div>
  `),
};

export const Colorful: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <iqv-avatar color="colorful" name="Mona Kane"></iqv-avatar>
      <iqv-avatar color="colorful" name="Tim Deboer"></iqv-avatar>
      <iqv-avatar color="colorful" name="Kevin Sturgis"></iqv-avatar>
      <iqv-avatar color="colorful" color-id="pumpkin" name="pumpkin avatar"></iqv-avatar>
      <iqv-avatar color="colorful" color-id="lilac" name="lilac avatar"></iqv-avatar>
      <iqv-avatar color="colorful" color-id="pink" name="pink avatar"></iqv-avatar>
      <iqv-avatar color="colorful" color-id="magenta" name="magenta avatar"></iqv-avatar>
      <iqv-avatar color="colorful" color-id="plum" name="plum avatar"></iqv-avatar>
      <iqv-avatar color="colorful" color-id="beige" name="beige avatar"></iqv-avatar>
      <iqv-avatar color="colorful" color-id="mink" name="mink avatar"></iqv-avatar>
      <iqv-avatar color="colorful" color-id="platinum" name="platinum avatar"></iqv-avatar>
      <iqv-avatar color="colorful" color-id="anchor" name="anchor avatar"></iqv-avatar>
    </div>
  `),
};

export const Shape: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>`
    <iqv-avatar shape="circular"></iqv-avatar>
    <iqv-avatar shape="square"></iqv-avatar>
  `),
};

export const Active: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>`
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <iqv-avatar>U</iqv-avatar>
      <iqv-avatar active="active">A</iqv-avatar>
      <iqv-avatar active="inactive">I</iqv-avatar>
      <div></div>
    </div>
  `),
};

export const ActiveAppearance: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>`
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <iqv-avatar active="active" appearance="ring">R</iqv-avatar>
      <iqv-avatar active="active" appearance="shadow">S</iqv-avatar>
      <iqv-avatar active="active" appearance="ring-shadow">RS</iqv-avatar>
    </div>
  `),
};

export const CustomInitials: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>` <iqv-avatar initials="CRF"></iqv-avatar> `),
};

export const Size: Story = {
  render: renderComponent(html<StoryArgs<IqvizyonAvatar>>`
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <iqv-avatar name="Jane Doe" size="16">16</iqv-avatar>
      <iqv-avatar name="Lydia Bauer" size="20">20</iqv-avatar>
      <iqv-avatar name="Amanda Brady" size="24">24</iqv-avatar>
      <iqv-avatar name="Henry Brill" size="28">28</iqv-avatar>
      <iqv-avatar name="Robin Counts" size="32">32</iqv-avatar>
      <iqv-avatar name="Tim Deboer" size="36">36</iqv-avatar>
      <iqv-avatar name="Cameron Evans" size="40">40</iqv-avatar>
      <iqv-avatar name="Mona Kane" size="48">48</iqv-avatar>
      <iqv-avatar name="Allan Munger" size="56">56</iqv-avatar>
      <iqv-avatar name="Erik Nason" size="64">64</iqv-avatar>
      <iqv-avatar name="Daisy Phillips" size="72">72</iqv-avatar>
      <iqv-avatar name="Kevin Sturgis" size="96">96</iqv-avatar>
      <iqv-avatar name="Elliot Woodward" size="120">120</iqv-avatar>
      <iqv-avatar name="John Doe" size="128">128</iqv-avatar>
    </div>
  `),
};

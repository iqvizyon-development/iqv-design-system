import { html } from '@microsoft/fast-element';
import { type Meta, renderComponent, type StoryArgs, type StoryObj } from '../helpers.stories.js';
import { getStorybookHelpers } from '../../.storybook/wc-toolkit-helpers.js';
import type { Drawer as IqvizyonDrawer } from './drawer.js';
import { DrawerPosition, DrawerSize, DrawerType } from './drawer.options.js';

type Story = StoryObj<IqvizyonDrawer>;
const { argTypes } = getStorybookHelpers<IqvizyonDrawer>('iqv-drawer');

const dismissed20Regular = html<StoryArgs<IqvizyonDrawer>>`<svg
  fill="currentColor"
  aria-hidden="true"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="m4.09 4.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 0 1 .63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 0 1-.63.06l-.07-.06a.5.5 0 0 1-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
    fill="currentColor"
  ></path>
</svg>`;

const toggleDrawer = (drawerID: string, containerID?: string) => {
  const drawer = document.getElementById(drawerID) as IqvizyonDrawer;

  if (drawer.dialog.open) {
    drawer.hide();
  } else {
    drawer.show();
  }
};
const hideDrawer = (drawerID: string) => {
  const drawer = document.getElementById(drawerID) as IqvizyonDrawer;
  if (drawer.dialog.open) {
    drawer.hide();
  }
};

const storyTemplate = html<StoryArgs<IqvizyonDrawer>>`
  <iqv-button appearance="primary" @click="${() => toggleDrawer('drawer-default')}"> Toggle Drawer </iqv-button>
  <iqv-drawer
    id="drawer-default"
    position="${story => story.position}"
    size="${story => story.size}"
    type="${story => story.type}"
    style="${story => (story['--drawer-width'] !== '' ? `--drawer-width: ${story['--drawer-width']};` : '')} ${story =>
      story['--dialog-backdrop'] !== '' ? `--dialog-backdrop: ${story['--dialog-backdrop']};` : ''}"
  >
    <iqv-drawer-body>
      <h2 slot="title">Drawer Header</h2>
      <iqv-button slot="close" appearance="transparent" icon-only aria-label="close">
        ${dismissed20Regular}
      </iqv-button>
      <div>
        <iqv-text>
          The drawer gives users a quick entry point to configuration and information. It should be used when retaining
          context is beneficial to users. An overlay is optional depending on whether or not interacting with the
          background content is beneficial to the user's context/scenario. An overlay makes the drawer blocking and
          signifies that the users full attention is required when making configurations.
        </iqv-text>

        <div>
          <iqv-field>
            <label slot="label">Please select an option</label>
            <iqv-radio-group id="demo-options" slot="input" orientation="vertical">
              <iqv-field label-position="after">
                <label for="option-one" slot="label">Option 1</label>
                <iqv-radio id="option-one" slot="input" name="demo-options" value="1"></iqv-radio>
              </iqv-field>
              <iqv-field label-position="after">
                <label for="option-two" slot="label">Option 2</label>
                <iqv-radio id="option-two" slot="input" name="demo-options" value="2"></iqv-radio>
              </iqv-field>
              <iqv-field label-position="after">
                <label for="option-three" slot="label">Option 3</label>
                <iqv-radio id="option-three" slot="input" name="demo-options" value="3"></iqv-radio>
              </iqv-field>
            </iqv-radio-group>
          </iqv-field>
        </div>
      </div>
      <div slot="footer">
        <iqv-button appearance="primary" @click="${() => hideDrawer('drawer-default')}">Close</iqv-button>
        <iqv-button appearance="secondary">Do Something</iqv-button>
      </div>
    </iqv-drawer-body>
  </iqv-drawer>
`;

export default {
  title: 'Components/Drawer',
  render: renderComponent(storyTemplate),
  args: {
    type: DrawerType.modal,
    size: DrawerSize.medium,
    position: DrawerPosition.start,
    '--drawer-width': '',
  },
  argTypes,
} as Meta<IqvizyonDrawer>;

export const Default: Story = {};

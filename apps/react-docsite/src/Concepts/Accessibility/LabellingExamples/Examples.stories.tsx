import * as React from 'react';

import {
  Button,
  Tab,
  TabList,
  Menu,
  MenuTrigger,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  Avatar,
  Text,
  Divider,
  makeStyles,
} from '@iqvizyonui/react-components';
import { Send24Regular, Mic24Regular, PeopleRegular, PersonDelete24Regular } from '@fluentui/react-icons';
import { IqvizyonWrapper } from './IqvizyonUiWrapper.stories';

const useStyles = makeStyles({
  visibleTextContainer: {
    marginTop: '10px',
    display: 'flex',
    width: '180px',
    justifyContent: 'space-between',
  },
  divider: {
    marginTop: '10px',
    marginBottom: '10px',
  },
});

export const ActionAvoidBad = () => (
  <IqvizyonWrapper>
    <Button aria-label="Click here to send message " size="small" icon={<Send24Regular />} />
  </IqvizyonWrapper>
);
export const ActionAvoidGood = () => (
  <IqvizyonWrapper>
    <Button aria-label="Send message" size="small" icon={<Send24Regular />} />
  </IqvizyonWrapper>
);

export const ComponentTypeAvoidBad = () => (
  <IqvizyonWrapper>
    <Button aria-label="Mute microphone button" size="small" icon={<Mic24Regular />} />
  </IqvizyonWrapper>
);
export const ComponentTypeAvoidGood = () => (
  <IqvizyonWrapper>
    <Button aria-label="Mute microphone" size="small" icon={<Mic24Regular />} />
  </IqvizyonWrapper>
);

export const StateAvoidBad = () => (
  <IqvizyonWrapper>
    <TabList defaultSelectedValue="Files">
      <Tab value="Chat">Chat</Tab>
      <Tab value="Files" aria-label="Files tab is active">
        Files
      </Tab>
      <Tab value="Activity">Activity</Tab>
    </TabList>
  </IqvizyonWrapper>
);

export const StateAvoidGood = () => (
  <IqvizyonWrapper>
    <TabList defaultSelectedValue="Files">
      <Tab value="Chat">Chat</Tab>
      <Tab value="Files">Files</Tab>
      <Tab value="Activity">Activity</Tab>
    </TabList>
  </IqvizyonWrapper>
);

export const CustomPositionAvoidBad = () => (
  <IqvizyonWrapper>
    <Menu>
      <MenuTrigger>
        <MenuButton>Profile</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem role="listitem" aria-label="Account settings..., first item of four">
            Account settings...
          </MenuItem>
          <MenuItem role="listitem" aria-label="Change status message..., second item of four">
            Change status message...
          </MenuItem>
          <MenuItem role="listitem" aria-label="Help, third item of four">
            Help
          </MenuItem>
          <MenuItem role="listitem" aria-label="Sign out, fourth item of four">
            Sign out
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </IqvizyonWrapper>
);

export const CustomPositionAvoidGood = () => (
  <IqvizyonWrapper>
    <Menu>
      <MenuTrigger>
        <MenuButton>Profile</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Account settings...</MenuItem>
          <MenuItem>Change status message...</MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </IqvizyonWrapper>
);

export const TextRepeatAvoidBad = () => (
  <IqvizyonWrapper>
    <Menu>
      <MenuTrigger>
        <Button aria-label="Participants" icon={<PeopleRegular />} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem aria-label="Meeting participant Robert Tolbert" icon={<Avatar />}>
            Robert Tolbert
          </MenuItem>
          <MenuItem aria-label="Meeting participant Celeste Burton" icon={<Avatar />}>
            Celeste Burton
          </MenuItem>
          <MenuItem aria-label="Meeting participant Cecil Folk" icon={<Avatar />}>
            Cecil Folk
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </IqvizyonWrapper>
);

export const TextRepeatAvoidGood = () => (
  <IqvizyonWrapper>
    <Menu>
      <MenuTrigger>
        <Button aria-label="Participants" icon={<PeopleRegular />} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList aria-label="Meeting participants" aria-labelledby={undefined}>
          <MenuItem aria-label="Robert Tolbert" icon={<Avatar />}>
            Robert Tolbert
          </MenuItem>
          <MenuItem aria-label="Celeste Burton" icon={<Avatar />}>
            Celeste Burton
          </MenuItem>
          <MenuItem aria-label="Cecil Folk" icon={<Avatar />}>
            Cecil Folk
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </IqvizyonWrapper>
);

export const FocusTextAvoidBad = () => {
  return (
    <IqvizyonWrapper>
      <Text tabIndex={0} block>
        With this option, notifications won't be displayed anymore . You can miss information about latest news.{' '}
      </Text>
      <Button>Submit </Button>
    </IqvizyonWrapper>
  );
};

export const FocusTextAvoidGood = () => {
  const styles = useStyles();
  return (
    <IqvizyonWrapper>
      <Text id="notificationText" block>
        With this option, notifications won't be displayed anymore . You can miss information about latest news.{' '}
      </Text>
      <Button aria-describedby="notificationText">Submit </Button>
      <Divider className={styles.divider} />
      <div id="testTitle">Summary of your order</div>
      <div role="group" aria-labelledby="testTitle">
        <Button>Buy</Button>
      </div>
    </IqvizyonWrapper>
  );
};

export const ReuseVisibleTextBad = () => {
  const styles = useStyles();
  return (
    <IqvizyonWrapper>
      <h4>Members</h4>
      <div className={styles.visibleTextContainer}>
        <Avatar />
        <span>Robert Tolbert</span>
        <Button icon={<PersonDelete24Regular />} aria-label="Remove Robert Tolbert" />
      </div>
    </IqvizyonWrapper>
  );
};

export const ReuseVisibleTextGood = () => {
  const styles = useStyles();
  return (
    <IqvizyonWrapper>
      <h4>Members</h4>
      <div className={styles.visibleTextContainer}>
        <Avatar />
        <span id="userNameId">Robert Tolbert</span>
        <Button
          icon={<PersonDelete24Regular />}
          aria-label="Remove"
          id="removeButtonId"
          aria-labelledby="removeButtonId userNameId"
        />
      </div>
    </IqvizyonWrapper>
  );
};

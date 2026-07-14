import { makeStaticStyles, makeStyles } from '@iqvizyonui/react-components';

export const useStaticStyles = makeStaticStyles({
  '#storybook-docs .sbdocs-content > div:last-child': {
    marginBottom: '0px',
  },
});

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '250px minmax(0, 1fr)',
    gridTemplateRows: '40px auto',
    maxWidth: '100%',
    minHeight: '100vh',
    width: '100%',
  },
  nav: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
  },
  sidebar: {
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 1,
    gridColumnEnd: 2,
  },
  content: {
    boxSizing: 'border-box',
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 2,
    gridColumnEnd: 3,
    maxWidth: '100%',
    minWidth: 0,
    overflowX: 'auto',
  },
});

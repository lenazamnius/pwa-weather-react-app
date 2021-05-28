import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    },
    MuiTypography: {
      h2: {
        lineHeight: '1',
      },
      h3: {
        lineHeight: '1',
        overflow: 'hidden',
      }
    },
    MuiPaper: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f8ff',
      },
    },
  },
});

import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  overrides: {
    MuiGrid: {
      container: {
        height: '100%',
      }
    },
    MuiBadge: {
      badge: {
        height: '33px',
        minWidth: '53px',
        borderRadius: '15px',
        fontSize: '1.3rem',
      },
      anchorOriginTopRightRectangle: {
        transform: 'scale(1) translate(85%, -50%)',
      },
    },
    MuiPaper: {
      root: {
        minWidth: '400px',
        padding: '40px 15px',
        textAlign: 'center',
      },
    },
  },
});

export const inputTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

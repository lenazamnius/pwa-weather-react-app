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
      colorError: {
        backgroundColor: '#ec6e4c',
      }
    },
    MuiPaper: {
      root: {
        minWidth: '400px',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px 45px',
        backgroundColor: '#f0f8ff',
      },
    },
  },
});

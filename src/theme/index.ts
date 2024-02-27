import { type ThemeOptions } from '@mui/material';

import { palette } from '../theme/palette';

export const themeOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        html: {
          width: '100%',
          height: '100%',
        },
        body: {
          width: '100%',
          height: '100%',
          padding: '30px 100px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          minWidth: '800px',
          input: {
            color: '#000',
            padding: '16px 32px',
          },
          '& fieldset': {
            borderRadius: 30,
            borderColor: '#6596B9',
            color: '#000',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: '38px',
          height: '38px',
        },
      },
    },
  },
  palette,
};

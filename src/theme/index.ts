import { type ThemeOptions } from '@mui/material';

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
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 0,
          borderRadius: 30,
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            padding: '16px 32px',
          },
          '& fieldset': {
            borderRadius: 30,
            borderColor: '#6596B9',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          input: {},
          '& fieldset': {
            borderRadius: 30,
            borderColor: '#6596B9',
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
};

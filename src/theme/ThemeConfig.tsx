import CssBaseline from '@mui/material/CssBaseline';
import { type ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './index';

export default function ThemeConfig({ children }: { children: ReactNode }) {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

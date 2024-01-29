import { FinanceProvider } from '../context';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

export const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <FinanceProvider>
          {children}
        </FinanceProvider>
    </ThemeProvider>
  );
};

import { ThemeProvider } from '@/components/theme-provider';
import { Theme } from '@/types.d';
import { ReactNode } from 'react';

type AppProps = {
  children: ReactNode,
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider defaultTheme={Theme.dark} storageKey='vite-ui-theme'>
      {children}
    </ThemeProvider>
  )
}

export default App;
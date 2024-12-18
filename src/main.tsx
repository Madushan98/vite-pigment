import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mui/material-pigment-css/styles.css';
import './index.css'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <App />
      </ThemeProvider>
  </StrictMode>,
)

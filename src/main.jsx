import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Details'

import { ThemeProvider } from 'styled-components'
import theme from './pages/styles/theme'
import GlobalStyles from './pages/styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

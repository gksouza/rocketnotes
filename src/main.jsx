import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details'
import { ThemeProvider } from './styles-components'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Details/>
    </ThemeProvider>        
  </React.StrictMode>,
)

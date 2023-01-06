import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '@/styles'
import Header from '@components/Header'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  )
}

export default App

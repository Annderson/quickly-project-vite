import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles'

import Header from './index'

describe('App', () => {
  it('should render component with text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
    expect(screen.getByText('MY APPLICATION')).toBeInTheDocument()
  })
})

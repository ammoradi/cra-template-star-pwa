import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import themeVariables from './variables'
import BaseStyles from './styles'

interface IProps {
  children: ReactNode
}

const Theme = ({ children }: IProps) => (
  <ThemeProvider theme={themeVariables}>
    <BaseStyles />
    {children}
  </ThemeProvider>
)

export default Theme

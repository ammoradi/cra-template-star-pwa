import React, { ReactNode } from 'react'

import { IButtonProps } from './Button.types'
import { StyledButton, Ripple } from './Button.styled'

interface IProps extends IButtonProps {
  children: ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick, className, ...rest }: IProps) => (
  <StyledButton {...rest} className={className}>
    <Ripple onClick={onClick}>{children}</Ripple>
  </StyledButton>
)

export default Button

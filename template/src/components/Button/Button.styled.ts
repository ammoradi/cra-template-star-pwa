/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */

import styled, { css } from 'styled-components'

import { scale, hexToRgba } from 'theme/utils'
import Ripples from '../Ripple'

import { IButtonProps } from './Button.types'

export const StyledButton = styled.button<IButtonProps>`
  width: ${(props) => (props.width ? scale(props.width) : '100%')};
  height: ${(props) => (props.height ? scale(props.height) : scale(40))};
  border-radius: ${(props) => (props.rounded ? scale(20) : 0)};
  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  color: ${(props) =>
    props.textColor ? props.theme.colors[props.textColor] : props.theme.colors.white};
  font-size: ${(props) => (props.fontSize ? scale(props.fontSize) : scale(14))};
  padding: 0;
  ${(props) =>
    (props.disabled || props.softDisabled) &&
    css`
      background-color: ${props.color
        ? hexToRgba(props.theme.colors[props.color], 0.45)
        : hexToRgba(props.theme.colors.primary, 0.45)};
    `}
  ${(props) =>
    props.inverted &&
    css`
      border: ${scale(1)} solid
        ${props.textColor
          ? props.theme.colors[props.textColor]
          : props.theme.colors.white};
    `}
`

export const Ripple = styled(Ripples)`
  width: 100%;
  height: 100%;
  position: relative !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
`

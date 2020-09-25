import { TColor } from 'theme/variables/colors'

export interface IButtonProps {
  color?: TColor
  textColor?: TColor
  rounded?: boolean
  width?: number
  height?: number
  fontSize?: number
  disabled?: boolean
  softDisabled?: boolean
  className?: string
  inverted?: boolean
}

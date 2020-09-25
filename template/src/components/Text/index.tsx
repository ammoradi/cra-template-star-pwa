import styled from 'styled-components'
import { TVariables } from 'theme/variables'
import { TColor } from 'theme/variables/colors'
import { scale } from 'theme/utils'

interface ITextProps {
  theme: TVariables
  size?: number
  weight?: string
  height?: number
  color?: TColor
  font?: string
  align?: string
  wordSpacing?: number
}

const Text = styled.span`
  ${(props: ITextProps) => props.font && `font-family: ${props.font}`};
  font-size: ${(props: ITextProps) =>
    props.size ? scale(props.size) : scale(props.theme.sizes.DEFAULT_textFontSize)};
  font-weight: ${(props: ITextProps) => props.weight || 'inherit'};
  line-height: ${(props: ITextProps) =>
    props.height
      ? scale(props.height)
      : scale(props.theme.sizes.DEFAULT_textLineHeight)};
  color: ${(props: ITextProps) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  text-align: ${(props: ITextProps) => props.align || 'start'};
  word-spacing: ${(props: ITextProps) =>
    props.wordSpacing ? scale(props.wordSpacing) : scale(0.5)};
`

export default Text

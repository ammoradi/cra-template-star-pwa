import colors, { TColors } from './colors'
import sizes, { TSizes } from './sizes'
import fonts, { TFonts } from './fonts'

export type TVariables = {
  sizes: TSizes
  colors: TColors
  fonts: TFonts
}

const themeVariables: TVariables = {
  sizes,
  colors,
  fonts
}

export default themeVariables

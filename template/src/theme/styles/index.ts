import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import './fonts.css'

import globalStyles from './global'
import keyFrames from './keyframes'

const ThemeConfig = createGlobalStyle`
  ${normalize}
  ${globalStyles}
  ${keyFrames}
`

export default ThemeConfig

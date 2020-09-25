import { css } from 'styled-components'

import sizes from '../variables/sizes'

const scaleFactor: number = window.innerWidth > 500 ? 500 : window.innerWidth

export const scale = (size: number) =>
  `${(size / sizes.appBaseWidth) * scaleFactor}px`

export const hexToRgba = (hex: string, a: number) => {
  const pureHex = hex.replace('#', '')
  const r = parseInt(pureHex.substring(0, 2), 16)
  const g = parseInt(pureHex.substring(2, 4), 16)
  const b = parseInt(pureHex.substring(4, 6), 16)

  return `rgba(${r},${g},${b},${a})`
}

export const image = (src: string, width: number, height: number) => css`
  width: ${scale(width)};
  height: ${scale(height)};
  background-image: url(${src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

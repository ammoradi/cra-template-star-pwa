export type TColor = 'white' | 'black' | 'transparent'

export type TColors = {
  [key in TColor]: string
}

const colors: TColors = {
  white: '#fff',
  black: '#000',
  transparent: 'transparent'
}

export default colors

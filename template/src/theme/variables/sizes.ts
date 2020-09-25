export type TSizes = {
  appMaxWidth: string
  appBaseWidth: number
  headerHeight: number
  toastHeight: number
  DEFAULT_textFontSize: number
  DEFAULT_textLineHeight: number
  radiusSm: number
  radiusMd: number
  radiusLg: number
  radiusXLg: number
  radiusXXLg: number
}

const sizes: TSizes = {
  // box sizes
  appMaxWidth: '500px',
  appBaseWidth: 375,
  headerHeight: 55,
  toastHeight: 55,
  // text sizes
  DEFAULT_textFontSize: 12,
  DEFAULT_textLineHeight: 15,
  // radius sizes
  radiusSm: 5,
  radiusMd: 17.5,
  radiusLg: 22.5,
  radiusXLg: 25,
  radiusXXLg: 27.5
}

export default sizes

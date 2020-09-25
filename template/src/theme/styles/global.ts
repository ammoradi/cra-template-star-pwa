import { css } from 'styled-components'

import { scale } from '../utils'

const globalStyles = css`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    direction: rtl;
    font-family: ${(props) => props.theme.fonts.default};
    font-size: ${(props) => scale(props.theme.sizes.DEFAULT_textFontSize)};
    line-height: ${(props) => scale(props.theme.sizes.DEFAULT_textLineHeight)};
  }

  html {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    height: 100%;
    width: 100%;
    position: relative;
    max-width: ${(props) => props.theme.sizes.appMaxWidth};
  }

  #root {
    width: 100%;
    height: 100%;
    position: relative;
  }

  input,
  textarea {
    outline: none;
    border: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  /* Overrides */
`

export default globalStyles

import styled from 'styled-components'
import { createRipples } from 'react-ripples'

const Ripple = createRipples({
  color: 'rgba(255,255,255,0.3)',
  during: 1000
})

export const RippleAsOverlay = styled(Ripple)`
  position: absolute !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

export default Ripple

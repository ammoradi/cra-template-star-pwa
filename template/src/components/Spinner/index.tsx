import React, { memo } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

import { scale } from 'theme/utils'
import colors, { TColor } from 'theme/variables/colors'

interface ISpinnerProps {
  size: number
  color?: TColor
}
function Spinner({ size, color }: ISpinnerProps) {
  return <PulseLoader loading color={colors[color || 'black']} size={scale(size)} />
}

export default memo(Spinner, () => true)

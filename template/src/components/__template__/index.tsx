import React from 'react'

import { Container } from './__template__.styled'

interface IProps {
  example: any
}

function Template({ example }: IProps) {
  return (
    <Container>
      this is reusable template component.
      {example}
    </Container>
  )
}

export default Template

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader'

import colors from 'theme/variables/colors'
import LoadingManager from 'libs/loading'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IProps {}
interface IState {
  show: boolean
}

class Loading extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      show: false
    }
  }

  componentDidMount() {
    LoadingManager.register(this)
  }

  componentWillUnmount() {
    LoadingManager.unregister()
  }

  show = () => this.setState({ show: true })

  hide = () => this.setState({ show: false })

  render() {
    const { show } = this.state

    if (!show) return null

    return (
      <Container>
        <PulseLoader loading color={colors.black} />
      </Container>
    )
  }
}

export default Loading

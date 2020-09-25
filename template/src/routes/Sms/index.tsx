import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import isEmpty from 'lodash.isempty'
import useInterval from '@use-it/interval'

// const SMS_CODE_LENGTH: number = 4

function Sms() {
  // const dispatch = useDispatch()
  const history = useHistory()
  // const [code, setCode] = useState<string>('')
  // const [loading, setLoading] = useState<boolean>(false)
  const [intervalDelay, setIntervalDelay] = useState<number | null>(null)
  const [countdownValue, setCountdownValue] = useState<number>(60)

  const stopInterval = () => {
    setIntervalDelay(null)
  }

  const startInterval = () => {
    setCountdownValue(60)
    setIntervalDelay(1000)
  }

  const intervalCallback = () => {
    if (!countdownValue) {
      stopInterval()
      return
    }

    setCountdownValue(countdownValue - 1)
  }

  useEffect(() => {
    startInterval()
    return () => stopInterval()
  }, [])

  useInterval(intervalCallback, intervalDelay)

  if (isEmpty(history.location.state)) {
    history.push('/login')
    return null
  }

  // const {
  //   location: {
  //     state: { phone }
  //   }
  // }: any = history

  // const isLoginBtnDisabled = code.length < SMS_CODE_LENGTH

  return <></>
}

export default Sms

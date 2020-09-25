import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import useTimeout from 'use-timeout'

import { selectToken } from 'store/selectors'

function Splash() {
  const history = useHistory()
  // const dispatch = useDispatch()
  const token = useSelector(selectToken)

  const handleDidMount = async () => {
    // dispatch any thunk here
    history.push(token ? '/home' : '/intro')
  }

  useEffect(() => {
    handleDidMount()
  }, [])

  // if you want to wait on splash even there is not any user token
  // useTimeout(() => {
  //   if (!token) {
  //     history.push('/login')
  //   }
  // }, 3000)

  return <></>
}

export default Splash

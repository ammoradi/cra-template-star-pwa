import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

function Factor() {
  const history = useHistory()
  // const dispatch = useDispatch()

  const updateApp = async () => {
    // dispatch any thunk here
    history.push('/home')
  }

  useEffect(() => {
    updateApp()
  }, [])

  return null
}

export default Factor

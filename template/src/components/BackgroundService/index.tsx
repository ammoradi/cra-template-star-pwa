import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'

const FORBIDDEN_ROUTES: string[] = ['/', '/factor']

function BackgroundService() {
  const location = useLocation()
  // const dispatch = useDispatch()
  const token = '' // get it from store/selectors with redux useSelector

  const handleDidMount = () => {
    // dispatch any thunk here
  }

  useEffect(() => {
    // run background service conditionally by routes
    if (token && !FORBIDDEN_ROUTES.includes(location.pathname)) handleDidMount()
  }, [])

  return null
}

export default BackgroundService

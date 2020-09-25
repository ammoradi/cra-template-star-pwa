import React, { ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import isEmpty from 'lodash.isempty'

import { selectToken } from 'store/selectors'

interface IProps {
  children: ReactNode
  path: any
  exact: boolean
}

const PrivateRoute = ({ children, path, ...rest }: IProps) => {
  const token = useSelector(selectToken)

  if (isEmpty(token)) {
    return (
      <Route {...rest}>
        <Redirect to="/login" />
      </Route>
    )
  }

  return <Route {...rest}>{children}</Route>
}

export default PrivateRoute

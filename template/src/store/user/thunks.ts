import { Dispatch } from 'redux'

import {
  clearUser
} from './actions'

export const logoutAction = (): any => (dispatch: Dispatch) =>
  new Promise(async (resolve) => {
    try {
      // dispatch(clearApp())
      dispatch(clearUser())
      return resolve('resolved')
    } catch (_) {
      return resolve('err')
    }
  })

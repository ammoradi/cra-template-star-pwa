// import { createSelector } from 'reselect'

import { IState } from './types'

export const selectToken = (state: IState) => state.user.token

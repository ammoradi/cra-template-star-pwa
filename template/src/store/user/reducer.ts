import {
  CLEAR_USER,
  IUserState,
  TUserActions
} from './types'

const initialState: IUserState = {
  token: ''
}

function userReducer(state: IUserState, action: TUserActions): IUserState {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case CLEAR_USER:
      return initialState

    default:
      return state
  }
}

export default userReducer

import {
  IAppState,
  TAppActions,
  CLEAR_APP
} from './types'

const initialState: IAppState = {}

function userReducer(state: IAppState, action: TAppActions): IAppState {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case CLEAR_APP:
      return initialState

    default:
      return state
  }
}

export default userReducer

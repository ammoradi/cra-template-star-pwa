import { IUserState } from './user/types'
import { IAppState } from './app/types'

export interface IState {
  user: IUserState
  app: IAppState
}

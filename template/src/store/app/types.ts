export const CLEAR_APP: string = 'CLEAR_APP'

export interface IAppState {}

export interface IClearApp {
  type: typeof CLEAR_APP
}

export type TAppActions = IClearApp

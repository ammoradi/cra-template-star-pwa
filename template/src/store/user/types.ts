export const CLEAR_USER: string = 'CLEAR_USER'

export interface IUserState {
  token: string
}

export interface IClearUser {
  type: typeof CLEAR_USER
}

/* eslint-disable @typescript-eslint/indent */
export type TUserActions = IClearUser

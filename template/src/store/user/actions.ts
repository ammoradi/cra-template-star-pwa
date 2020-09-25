import {
  CLEAR_USER,
  IClearUser
} from './types'

export const clearUser = (): IClearUser => ({
  type: CLEAR_USER
})

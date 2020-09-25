import { AxiosPromise } from 'axios'
import axios from '../config/axios'

import { URL } from '../config/constants'

const PREFIX: string = 'Authorize'

// SendCode
export interface ISendCodeResponse {
  CustomerId: number
  IsNewUser: boolean
  Token: string
  ProfileIsComplete: boolean
}
const sendCode = (phoneNumber: string): AxiosPromise<ISendCodeResponse> => {
  return axios({
    method: 'post',
    url: `${URL}/${PREFIX}/SendCode`,
    data: `"${phoneNumber}"`
  })
}

// CheckCode
export interface ICheckCodeBody {
  id: number
  code: string
}
export interface ICheckCodeResponse {
  token: string
}
const checkCode = (body: ICheckCodeBody): AxiosPromise<ICheckCodeResponse> => {
  return axios({
    method: 'post',
    url: `${URL}/${PREFIX}/CheckCode`,
    data: body
  })
}

export default {
  sendCode,
  checkCode
}

import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import isEmpty from 'lodash.isempty'

// import { ErrorMessages } from './constants'

export const debug = (
  title: string,
  url?: string,
  body?: object,
  method?: string,
  headers?: object
) => {
  /* eslint-disable */
  if (process.env.NODE_ENV === 'development') {
    const d = new Date()
    if (console.groupCollapsed) {
      console.groupCollapsed(title, `@ ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`)
    } else {
      console.log(title, `@ ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`)
    }

    if (method) console.log('%c method: ', 'color: #e74c3c; font-weight: bold', method)
    if (url) console.log('%c endpoint: ', 'color: #2ecc71; font-weight: bold', url)
    if (body) console.log('%c body: ', 'color: #3498db; font-weight: bold', body)
    if (headers) console.log('%c headers: ', 'color: #e67e22; font-weight: bold', headers)
    if (console.groupEnd) {
      console.groupEnd()
    }
  }
  /* eslint-enable */
}

export type TResponse = {
  Status?: boolean
  Message?: string
  config: AxiosRequestConfig
}

export const errorHandler = (err: TResponse) => {
  const { Message } = err
  if (Message !== 'cancel') {
    // toast.error(Message || ErrorMessages.Unknown)
  }
  return err
}

export const successHandler = (res: TResponse) =>
  res.Status ? res : errorHandler(res)

export const fetcher = (api: (...args: any[]) => AxiosPromise<any>, ...args: any[]) =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await api(...args)
      const { data } = result

      debug(
        `success-${result.config.method ? result.config.method.toUpperCase() : ''}-${
          result.config.url
        }`,
        result.config.url,
        data,
        result.config.method,
        result.config.headers
      )

      if (isEmpty(data) || typeof data === 'boolean') {
        return resolve(true)
      }

      const { Status } = data
      if (data && Status === false) return reject(errorHandler(data))

      return resolve(data)
    } catch (e) {
      if (axios.isCancel(e)) {
        return reject(errorHandler({ ...e, Message: 'cancel' }))
      }
      if (e)
        debug(
          `error-${e.config.method.toUpperCase()}-${e.config.url}`,
          e.config.url,
          { body: e.config.data, err: e.response ? e.response.data : e },
          e.config.method,
          e.config.headers
        )
      return reject(errorHandler(e.response ? e.response.data : e))
    }
  })

import axios, { AxiosRequestConfig } from 'axios'

import { store } from 'store/config'
import { debug } from './utils'
import { withoutTokensApis } from './constants'

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json'
  },
  validateStatus: (status: number) => status >= 200 && status < 300
}

const instance = axios.create(defaultOptions)

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  try {
    const newConfig: AxiosRequestConfig = { ...config }

    const shouldAddToken: boolean = !withoutTokensApis.some(
      (api: string) => config.url && config.url.includes(api)
    )
    if (shouldAddToken) {
      const state: any = store.getState()
      const { token } = state.user
      if (token) newConfig.headers.Authorization = `${token}`
    }

    debug(
      `${newConfig.method ? newConfig.method.toUpperCase() : ''}-${newConfig.url}`,
      newConfig.url,
      newConfig.data,
      newConfig.method,
      newConfig.headers
    )
    return newConfig
  } catch (_) {
    debug(config.url || '', config.url, config.data, config.method, config.headers)
    return config
  }
})

export default instance

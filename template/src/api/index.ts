import authorizeApis from './endpoints/auth'
import appApis from './endpoints/app'
import { fetcher } from './config/utils'

interface TRawApis {
  [key: string]: any
}
const rawApis: TRawApis = {
  ...authorizeApis,
  ...appApis
}

type TApis = {
  [key: string]: (...args: any[]) => Promise<any>
}
const APIs: TApis = {}

Object.keys(rawApis).forEach((funcName: string) => {
  APIs[funcName] = (...args: any[]) => fetcher(rawApis[funcName], ...args)
})

export default APIs

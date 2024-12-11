import { AxiosRequestConfig } from 'axios'
import { IConfig } from './i-config'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IApiRequest<T = any> extends AxiosRequestConfig {
  payload?: Partial<T> | T
  url: string
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  toResponse?: Function
  keyUrl: keyof IConfig["rest"]
}

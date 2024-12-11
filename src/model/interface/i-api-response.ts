import { AxiosResponse } from 'axios'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IApiResponse<T = any, D = any> extends AxiosResponse<T, D> {}

import { IApiRequest, IApiResponse } from '@/model/interface'
import { QueryKey } from '@tanstack/react-query'

type FormType = 'CREATE' | 'UPDATE'
export interface IParameters<T, D = T> {
  fetcher: (value: Partial<IApiRequest<T>>) => Promise<IApiResponse<D>>
  queryKey: string[]
  props: Partial<IApiRequest<T>>
}

export type TKeyQuery<P> = {
  queryKey: QueryKey
  payload: Partial<P>
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type PropsFetcherType<T = any, D = T> = (v: Partial<IApiRequest<T>>) => Promise<IApiResponse<D>>

import { IApiRequest, IApiResponse } from '@/model/interface'
import { QueryKey } from '@tanstack/react-query'

export interface IParameters<T, D> {
  fetcher: (value: Partial<IApiRequest<T>>) => Promise<IApiResponse<D>>
  queryKey: string[]
  props: Partial<IApiRequest<T>>
}

export type TKeyQuery<P> = {
  queryKey: QueryKey
  payload: Partial<P>
}

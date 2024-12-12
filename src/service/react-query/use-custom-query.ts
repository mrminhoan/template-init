import { useQuery } from '@tanstack/react-query'
import { IParameters } from './react-query-type'
import { createKeyQuery } from '@/utils/create-key-query'

export const useCustomQuery = <T, D>(parameters: IParameters<T, D>) => {
  const { fetcher, queryKey, props } = parameters
  const { payload } = props || {}
  const query = useQuery({
    queryKey: createKeyQuery({
      queryKey,
      payload: payload ?? {}
    }),
    queryFn: () => fetcher(props || {})
  })

  const { data: response } = query

  return {
    ...query,
    data: response
  }
}

import { IApiRequest, IApiResponse } from '@/model/interface'
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'

type MutateOptionType<T> = UseMutationOptions<IApiResponse<T>, Error, T> & {
  props?: Partial<IApiRequest<T>>
  fetcher?: (value: Partial<IApiRequest<T>>) => Promise<IApiResponse<T>>
}
export const useCustomMutation = <T>(parameters: MutateOptionType<T>) => {
  const { props, fetcher, onSuccess: handleSuccess, onError: handleError } = parameters
  const { payload } = props || {}
  const mutation = useMutation({
    mutationFn: (params: T) => {
      return fetcher ? fetcher({ ...params, ...payload } ?? {}) : defaultFetcher()
    },
    onSuccess: (data, variables, context) => {
      handleSuccess?.(data, variables, context)
    },
    onError: (error, variable, context) => {
      handleError?.(error, variable, context)
    }
  })
  return {
    ...mutation
  }
}

const defaultFetcher = () => {
  throw new Error('Fetcher is not defined for this type!')
}

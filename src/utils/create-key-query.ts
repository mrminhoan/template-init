import { TKeyQuery } from '@/service/react-query'

export const createKeyQuery = <T>(value: TKeyQuery<T>) => {
  const { payload, queryKey } = value
  if (!payload) return queryKey
  return [
    ...queryKey,
    JSON.stringify(Object.fromEntries(Object.entries(payload).filter(([key, value]) => value !== null)))
  ]
}

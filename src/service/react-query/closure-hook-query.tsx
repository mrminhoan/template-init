import { IParameters } from './react-query-type'
import merge from 'lodash/merge'
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Func = (value: any) => any
export const closureHookQuery = <T, D>(func: Func, params: Partial<IParameters<T, D>>) => {
  return (parameters?: Partial<IParameters<T, D>>) => {
    const mergeParams = merge(params, parameters)
    return func(mergeParams)
  }
}

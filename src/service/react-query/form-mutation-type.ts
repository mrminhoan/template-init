import { PropsFetcherType } from './react-query-type'

export enum TMutation {
  Create = 'Create',
  Update = 'Update',
  Delete = 'Delete'
}

export interface IMutationForm {
  type: keyof typeof TMutation
}

export type TMutationFetchList = Partial<{
  [key in keyof typeof TMutation]: PropsFetcherType
}>

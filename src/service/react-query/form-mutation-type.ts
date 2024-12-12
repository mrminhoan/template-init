import { PropsFetcherType } from './react-query-type'

export enum TFormMutation {
  Create = 'Create',
  Update = 'Update',
  Delete = 'Delete'
}

export interface IMutationForm {
  type: keyof typeof TFormMutation
}

export type TMutationFetchList = Partial<{
  [key in keyof typeof TFormMutation]: PropsFetcherType
}>

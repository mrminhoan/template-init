import { createNew, editUser, removeUser } from '@/service/pages'
import { IMutationForm, TFormMutation, TMutationFetchList } from '../form-mutation-type'
import { useCustomMutation } from '../use-custom-mutation'

export const MutationUser = (props: IMutationForm) => {
  const { type } = props
  const fetch: TMutationFetchList = {
    [TFormMutation.Create]: createNew,
    [TFormMutation.Update]: editUser,
    [TFormMutation.Delete]: removeUser
  }

  return useCustomMutation({
    fetcher: fetch[type],
    onSuccess: () => {
      console.log(`${type} success`)
    },
    onError: () => {
      console.log(`${type} failed`)
    }
  })
}

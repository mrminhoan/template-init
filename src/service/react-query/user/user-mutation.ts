import { createNew, editUser, removeUser } from '@/service/pages'
import { IMutationForm, TMutation, TMutationFetchList } from '../form-mutation-type'
import { useCustomMutation } from '../use-custom-mutation'

export const MutationUser = (props: IMutationForm) => {
  const { type } = props
  const fetch: TMutationFetchList = {
    [TMutation.Create]: createNew,
    [TMutation.Update]: editUser,
    [TMutation.Delete]: removeUser
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

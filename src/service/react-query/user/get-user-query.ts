import { API } from '@/constants/api'
import { closureHookQuery, useCustomQuery } from '@/service'
import { getAll } from '@/service/pages/user'

export const GetUserQuery = closureHookQuery(useCustomQuery, {
  fetcher: getAll,
  queryKey: [API.USERS.LIST]
})

import { API } from '@/constants'
import { BaseSearchModel, UserModel } from '@/model/class'
import { IApiRequest } from '@/model/interface'
import { BaseService } from '@/service/axios'

export const getAll = (request?: Partial<IApiRequest>) => {
  return BaseService.get<BaseSearchModel, UserModel[]>({
    url: API.USERS.LIST,
    payload: request?.payload,
    toResponse: UserModel.toResponse
  })
}

export const createNew = (request?: Partial<IApiRequest>) => {
  return BaseService.post<UserModel>({
    url: API.USERS.CREATE,
    payload: request?.payload
  })
}

export const editUser = (id: string, request: Partial<IApiRequest>) => {
  return BaseService.put<UserModel>({
    url: API.USERS.UPDATE.format(id),
    payload: request?.payload
  })
}

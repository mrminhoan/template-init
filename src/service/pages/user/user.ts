import { API } from '@/constants'
import { BaseSearchModel, UserModel } from '@/model/class'
import { IApiRequest } from '@/model/interface'
import { BaseService } from '@/service/axios'

export const getAll = (request: Partial<IApiRequest<BaseSearchModel>>) => {
  return BaseService.get<UserModel[]>({
    url: API.USERS.LIST,
    payload: request.payload,
    toResponse: UserModel.toResponse
  })
}

export const createNew = (request: Partial<IApiRequest<UserModel>>) => {
  return BaseService.post<UserModel>({
    url: API.USERS.CREATE,
    payload: request.payload
  })
}

export const editUser = (id: string, request: Partial<IApiRequest<UserModel>>) => {
  return BaseService.put<UserModel>({
    url: API.USERS.UPDATE.format(id),
    payload: request?.payload
  })
}

export const removeUser = (id: string) => {
  return BaseService.remove<UserModel>({
    url: API.USERS.DELETE.format(id)
  })
}

export const getDetailById = (request: Partial<IApiRequest<UserModel>> = {}) => {
  const id = request?.payload?.id?.toString() || ''
  return BaseService.get<UserModel>({
    url: API.USERS.DETAIL.format(id)
  })
}

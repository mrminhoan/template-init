import { IApiResponse, IConfig } from '@/model/interface'
import { IApiRequest } from '@/model/interface/i-api-request'
import { getConfigStorage } from '@/utils/local-storage'
import axios, { AxiosResponse } from 'axios'

const getUrlByKey = (key: keyof IConfig['rest']) => {
  return getConfigStorage.getValue()?.rest[key]
}

const instance = axios.create({
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' }
})

export const BaseService = {
  get<T, D>({ url = '', payload, toResponse, keyUrl = 'apiUrl' }: Partial<IApiRequest<T>>): Promise<IApiResponse<D>> {
    return instance
      .get(url, {
        baseURL: getUrlByKey(keyUrl),
        params: payload
      })
      .then((res) => {
        let dataMapping = res?.data
        if (toResponse) {
          if (Array.isArray(dataMapping)) {
            dataMapping = dataMapping.map((e) => toResponse(e))
          } else {
            dataMapping = toResponse(dataMapping)
          }
        }
        return Promise.resolve({ ...res, data: dataMapping })
      })
      .catch((error) => Promise.reject(error))
  },

  post<T>({ url = '', payload, keyUrl = 'apiUrl' }: Partial<IApiRequest<T>>): Promise<IApiResponse<T>> {
    return instance
      .post(url, payload, {
        baseURL: getUrlByKey(keyUrl)
      })
      .then((res) => {
        return Promise.resolve(res)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  put<T>({ url = '', keyUrl = 'apiUrl', payload }: Partial<IApiRequest<T>>) {
    return instance
      .put(url, payload, {
        baseURL: getUrlByKey(keyUrl)
      })
      .then((res) => {
        return Promise.resolve(res)
      })
      .catch((error) => {
        return Promise.resolve(error)
      })
  }
}

import { LOCAL_STORAGE } from '@/constants'
import { fetchJson } from '../fetch-json'
import { IConfig } from '@/model/interface'

export const getConfigStorage = {
  getValue() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE.CONFIG) || '')
  },
  setValue(data: IConfig) {
    return localStorage.setItem(LOCAL_STORAGE.CONFIG, JSON.stringify(data))
  }
}

export const setConfigStorage = async (urlRemote: string) => {
  const configJson = await fetchJson(urlRemote)
  getConfigStorage.setValue(configJson)
}

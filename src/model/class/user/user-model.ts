import { BaseModel } from '../base-model'

export interface IName {
  firstname: string
  lastname: string
}

export interface IAddress {
  city: string
  street: string
  number: number
  zipcode: string
}

export class UserModel extends BaseModel {
  email: string
  username: string
  password: string
  name: IName
  address: IAddress
  phone: string
  _fullname: string

  static toResponse(data: UserModel): UserModel {
    const model = data
    model._fullname = `${model?.name?.firstname} ${model?.name?.lastname}`
    return model
  }
}

import { IGuardRoute } from '@/model/interface'
import React from 'react'
import { Navigate } from 'react-router'

function PublicGuardRoute(props: IGuardRoute) {
  const { component: Component } = props
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const userInfo: any = {
    id: 10
  }
  console.log(userInfo?.id)
  return !userInfo?.id ? React.isValidElement(Component) ? Component : <Component /> : <Navigate to="/" />
}

export default PublicGuardRoute

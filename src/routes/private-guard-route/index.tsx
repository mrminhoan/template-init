import { ROUTES } from '@/constants'
import { IGuardRoute } from '@/model/interface'
import React from 'react'
import { Navigate } from 'react-router'

function PrivateGuardRoute(props: IGuardRoute) {
  const { component: Component } = props
  const auth = true
  return auth ? React.isValidElement(Component) ? Component : <Component /> : <Navigate to={ROUTES.LOGIN} />
}

export default PrivateGuardRoute

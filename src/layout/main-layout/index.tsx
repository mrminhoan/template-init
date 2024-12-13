import { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants'
import { Navigate, NavLink } from 'react-router'

interface IProps {
  children: ReactNode
}
function MainLayout(props: IProps) {
  const { children } = props
  return (
    <div className="m-5">
      <div className="flex gap-5">
        <Button className="mb-2">
          <NavLink to={ROUTES.PRODUCTS.ROOT}>Product</NavLink>
        </Button>
        <Button className="mb-2">
          <NavLink to={ROUTES.PRODUCTS.LIST}>Product List</NavLink>
        </Button>
        <Button className="mb-2">
          <NavLink to={ROUTES.PRODUCTS.DETAIL.replace(':id', '1')}>Product Detail</NavLink>
        </Button>
        <Button className="mb-2">
          <NavLink to={ROUTES.USERS.ROOT}>Users</NavLink>
        </Button>
        <Button className="mb-2">
          <NavLink to={ROUTES.USERS.LIST}>Users List</NavLink>
        </Button>
      </div>

      {children}
    </div>
  )
}

export default MainLayout

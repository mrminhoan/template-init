import { ROUTES } from '@/constants'
import { IMenu } from '@/model/interface/i-menu'
import LoadedAleCore from '@/utils/loadable-ale-core'
import { initMenu } from './init-menu'

const PageNotFound = LoadedAleCore(() => import('@/pages/not-found'))
const ProductPage = LoadedAleCore(() => import('@/pages/product'))
const ProductDetail = LoadedAleCore(() => import('@/pages/product/product-detail'))
const ProductList = LoadedAleCore(() => import('@/pages/product/product-list'))

const UserPage = LoadedAleCore(() => import('@/pages/user'))
const UserList = LoadedAleCore(() => import('@/pages/user/user-list'))

export const mainMenu: Partial<IMenu>[] = initMenu([
  {
    path: '',
    element: <ProductPage />
  },
  {
    path: ROUTES.PRODUCTS.ROOT,
    element: <ProductPage />,
    children: [
      {
        path: '',
        element: <ProductList />
      },
      {
        path: ROUTES.PRODUCTS.DETAIL,
        element: <ProductDetail />
      },
      {
        path: ROUTES.PRODUCTS.LIST,
        element: <ProductList />
      }
    ]
  },
  {
    path: ROUTES.USERS.ROOT,
    element: <UserPage />,
    children: [
      {
        path: '',
        element: <UserList />
      },
      {
        path: ROUTES.USERS.LIST,
        element: <UserList />
      }
    ]
  }
])

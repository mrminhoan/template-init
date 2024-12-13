import { ROUTES } from '@/constants'
import { IMenu } from '@/model/interface/i-menu'
import LoadedAleCore from '@/utils/loadable-ale-core'
import PrivateGuardRoute from './private-guard-route'
import PublicGuardRoute from './public-guard-route'

const MainPage = LoadedAleCore(() => import('@/pages/main'))
const PageNotFound = LoadedAleCore(() => import('@/pages/not-found'))

export const initMenu = (children: Partial<IMenu>[]): Partial<IMenu>[] => [
  {
    path: '',
    element: <PrivateGuardRoute component={MainPage} />,
    children
  },
  {
    path: ROUTES.LOGIN,
    element: <PublicGuardRoute component={<p>Login</p>} />
  },
  {
    path: ROUTES.LOGOUT,
    element: <PublicGuardRoute component={<p>Logout</p>} />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]

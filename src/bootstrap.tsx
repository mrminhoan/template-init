import LoadedAleCore from '@/utils/loadable-ale-core'
import WrapperConfig from './wrapper-config'
import { setConfigStorage } from './utils/local-storage'
const App = LoadedAleCore(() => import('./App'))
try {
  WrapperConfig({
    children: <App />
  })
  // setConfigStorage("/assets/config.json")
} catch (error) {
  console.log(error)
}

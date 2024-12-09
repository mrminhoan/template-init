import LoadedAleCore from '@utils/loadable-ale-core'
import WrapperConfig from './wrapper-config'
const App = LoadedAleCore(() => import('./App'))
try {
  WrapperConfig({
    children: <App />
  })
  // biome-ignore lint/correctness/noUnreachable: <explanation>
} catch (error) {
  console.log(error)
}

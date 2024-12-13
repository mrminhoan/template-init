import './style/main.css'
import { RenderMenu } from './routes/render-menu.by-array'
import { mainMenu } from './routes/main-menu'

const App = () => {
  return <RenderMenu paths={mainMenu}/>
}

export default App

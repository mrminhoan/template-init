import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { setConfigStorage } from './utils/local-storage'
import "./custom-prototype/extension"
interface IProps {
  children: ReactNode
  urlRemote?: string
}
function WrapperConfig(props: IProps) {
  const { children, urlRemote = '/assets/config.json' } = props
  const root = ReactDOM.createRoot(document.getElementById('root')!)

  setConfigStorage(urlRemote)

  root.render(
    <React.StrictMode>
      <BrowserRouter>{children}</BrowserRouter>
    </React.StrictMode>
  )
}

export default WrapperConfig

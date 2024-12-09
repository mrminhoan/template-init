import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'

interface IProps {
  children: ReactNode
}
function WrapperConfig(props: IProps) {
  const { children } = props
  const root = ReactDOM.createRoot(document.getElementById('root')!)
  root.render(
    <React.StrictMode>
      <BrowserRouter>{children}</BrowserRouter>
    </React.StrictMode>
  )
}

export default WrapperConfig

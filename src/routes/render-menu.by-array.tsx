import { IMenu } from '@/model/interface/i-menu'
import { Navigate, Route, Routes } from 'react-router'

interface IProps {
  paths: Partial<IMenu>[]
}
export const RenderMenu = (props: IProps) => {
  const { paths } = props

  function routeItem(item: Partial<IMenu>) {
    const { element, path, to } = item
    if (to) {
      return <Navigate to={to} />
    }
    return <Route path={path} element={element} key={path} />
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  function routesList(paths: Partial<IMenu>[]): any {
    return paths.map((item) => {
      const { element, path, children } = item
      if (children) {
        return (
          <Route path={path} element={element} key={path}>
            {routesList(children)}
          </Route>
        )
      }
      return routeItem(item)
    })
  }
  console.log(routesList(paths))
  return <Routes>{routesList(paths)}</Routes>
}

import MainLayout from '@/layout/main-layout'
import { Outlet } from 'react-router'

function Main() {
  return (
    <MainLayout>
      Main Page
      <Outlet />
    </MainLayout>
  )
}

export default Main

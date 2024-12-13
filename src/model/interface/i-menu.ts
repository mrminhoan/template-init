import { ReactNode } from 'react'

export interface IMenu {
  path: string
  element: ReactNode
  to: string
  children: Partial<IMenu>[]
}

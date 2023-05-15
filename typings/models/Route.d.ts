import type { RouteProps } from 'react-router-dom'

declare global {
  namespace models {
    type Route = RouteProps & {
      path: string
    }
  }
}

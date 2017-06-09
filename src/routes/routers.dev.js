import Login from '../components/Login/index'

const LoginRoute = {
  path: 'index',
  component: Login
}

const route = [
  {
    path: '/login',
    // component: App,
    childRoutes: [
      LoginRoute
    ]
  }
]

export default route

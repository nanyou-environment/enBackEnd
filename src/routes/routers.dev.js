import Login from '../components/Login/index'

const LoginRoute = {
  path: 'login',
  component: Login
}

const route = [
  {
    path: '/',
    // component: App,
    childRoutes: [
      LoginRoute
    ]
  }
]

export default route

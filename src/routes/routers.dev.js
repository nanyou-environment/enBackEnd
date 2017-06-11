import Login from '../components/Login'
import Index from '../pages/index/components'

// const LoginRoute = {
//   path: 'index',
//   component: Login
// }

const route = [
  {
    path: '/login',
    component: Login,
    // childRoutes: [
    //   LoginRoute
    // ]
  },
  {
    path: 'index',
    components: Index
  }
]

export default route

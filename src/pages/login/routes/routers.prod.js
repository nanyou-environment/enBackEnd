// import App from './../views/App'
import Login from './Login'
import Index from './Index'
const basePath = '/'

const route = [
  {
    path: basePath,
    // component: App,
    childRoutes: [
      Login,
      Index
    ]
  }
]

export default route

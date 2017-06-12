// import App from './../views/App'
import Index from './Index'
const basePath = '/'

const route = [
  {
    path: basePath,
    // component: App,
    childRoutes: [
      Index
    ]
  }
]

export default route

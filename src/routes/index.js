import App from './../views/App';
import Login from './Login';
const basePath = '/';

const route = [
  {
    path: basePath,
    component: App,
    childRoutes: [
      Login
    ]
  }
];

export default route;

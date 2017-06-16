import React from 'react'// eslint-disable-line
import ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
import { AppContainer } from 'modules/react-hot-loader'
// AppContainer is a necessary wrapper component for HMR
import root from './root'
import 'normalize.css'
import '../../global.scss'

const render = (Component) => {// eslint-disable-line
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(root)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./root', () => {
    const nextRoot = require('./root').default
    render(nextRoot)
  })
}

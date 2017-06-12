import React , { Component }from 'react'// eslint-disable-line
import ZoneModule from 'common/ZoneModule'
import './styles/main.scss'

class Main extends Component {
  render () {
    return (
      <div className="index-wrapper">
        <ZoneModule></ZoneModule>
      </div>
    )
  }
}

export default Main
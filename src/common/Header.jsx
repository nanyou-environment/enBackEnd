import React , { Component }from 'react'// eslint-disable-line
import './styles/header.scss'

class Header extends Component {
  render () {
    return (
      <header className="headers">
        <ul className="header-ul">
          <li className="header-item">首页</li>
          <li className="header-item">逛逛</li>
          <li className="header-item">周边</li>
          <li className="header-item">个人中心</li>
        </ul>
      </header>
    )
  }
}

export default Header
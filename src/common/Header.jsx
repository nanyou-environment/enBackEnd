import React , { Component }from 'react'// eslint-disable-line
import './styles/header.scss'

// class Header extends Component {
//   render() {
//     return (
//       <header className="headers">
//         <ul className="header-ul">
//           <li className="header-item"><a href="">首页</a></li>
//           <li className="header-item"><a href="">逛逛</a></li>
//           <li className="header-item"><a href="">周边</a></li>
//           <li className="header-item"><a href="">个人中心</a></li>
//         </ul>
//       </header>
//     )
//   }
// }

export default function Header() {
  return (
    <header className="headers">
      <ul className="header-ul">
        <li className="header-item"><a href="">首页</a></li>
        <li className="header-item"><a href="">逛逛</a></li>
        <li className="header-item"><a href="">周边</a></li>
        <li className="header-item"><a href="">个人中心</a></li>
      </ul>
    </header>
  )
}

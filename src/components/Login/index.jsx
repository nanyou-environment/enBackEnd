import React , { Component }from 'react'// eslint-disable-line
import ui from 'redux-ui'
import lock from '../../../assets/svgs/lock.svg'// eslint-disable-line
import loginMan from '../../../assets/svgs/login-man.svg'// eslint-disable-line
import analytics from '../../../assets/svgs/analytics.svg'// eslint-disable-line
require('../../../assets/sprite.css')
require('./styles')

const _require = require.context('../../../assets/svgs', false, /\.svg$/)
_require.keys().forEach(key => _require(key))

const Icon = ({symbol, className}) => {
  const iconClass = className ? `Icon Icon-${symbol} ${className}` : `Icon Icon-${symbol}`
  return (
    <svg className={iconClass} viewBox="-10,-10,30,30">
      <use xlinkHref={`#${symbol}`} />
    </svg>
  )
}

// class Login extends Component {
//   render () {
//     const { loading } = this.props.ui
//     return (
//       <div>
//         <h2>login by ,laotie {loading}</h2>
//         <button onClick={this.clickTest.bind(this)}>reset</button>
//         <figure>
//           <div className="icon-icon_qq" />
//           <figuration>图片</figuration>
//         </figure>
//       </div>
//     )
//   }
//   clickTest() {
//     this.props.updateUI({
//       loading: false
//     })
//   }
// }

// const loginContainer = ui({
//   key: 'logins',
//   state: {
//     loading: true
//   }
// })(Login)

// export default loginContainer
class Login extends Component {
  render () {
    return (
      <div>
      <div className="login">
        <form>
          <ul style={{ padding: '0', margin: '0'}}>
            <li className="login-row">
              <label className="login-user-label">
                <span className="login-user-avatar"></span>
              </label>
              <input placeholder="邮箱/手机号" className="login-user-input"></input>
            </li>
            <li className="login-row">
              <label className="login-user-label">
                <Icon className="testing" symbol="lock" />
              </label>
              <input placeholder="密码" className="login-user-input"></input>
            </li>
            <div className="unremember-password">
              <a>忘记登录密码？</a>
            </div>
            <div className="login-submit-options">
              <input type="submit" value="登陆" className="login-submit"/>
              <p className='login-others'>
                <a className="member-login">淘宝会员登陆</a>
                <a className="register">免费注册</a>
              </p>
            </div>
          </ul>
        </form>
      </div>
      </div>
    )
  }
  clickTest() {
    this.props.updateUI({
      loading: false
    })
  }
}

const loginContainer = ui({
  key: 'logins',
  state: {
    loading: true
  }
})(Login)

export default loginContainer
import React , { Component }from 'react'// eslint-disable-line
import ui from 'redux-ui'
require('../../../assets/sprite.css')

class Login extends Component {
  render () {
    const { loading } = this.props.ui
    return (
      <div>
        <h2>login by ,laotie {loading}</h2>
        <button onClick={this.clickTest.bind(this)}>reset</button>
        <figure>
          <div className="icon-icon_qq" />
          <figuration>图片</figuration>
        </figure>
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
import React , { Component }from 'react'// eslint-disable-line
import ZoneModule from 'common/ZoneModule'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './styles/main.scss'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      flag: 0,
      test: 'hello world'
    }
  }
  shouldComponentUpdate() {
    return false
  }
  componentWillUpdate() {
  }
  changeState () {
    this.setState({test: 'haha'})
  }
  render () {
    const { flag } = this.state
    return (
      <div className="index-wrapper">
        <div>{flag}</div>
        <ZoneModule testDta={this.state.test}></ZoneModule>
        <button onClick={this.changeState.bind(this)}>dianwo</button>
      </div>
    )
  }
}

export default Main
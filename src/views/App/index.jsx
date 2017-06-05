import React, { Component } from 'react'// eslint-disable-line

class App extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    //  通过key强制更新公用的菜单
    return (
      <div>
        <h2>老夫子，你好👋, </h2>
        {this.props.children}
      </div>
    )
  }
}

export default App

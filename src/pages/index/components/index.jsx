import React , { Component }from 'react'// eslint-disable-line


class Index extends Component {
  render () {
    return (
      <div>fhasflhalfaf</div>
    )
  }
  clickTest() {
    this.props.updateUI({
      loading: false
    })
  }
}

export default Index
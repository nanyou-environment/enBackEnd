import React , { Component }from 'react'// eslint-disable-line
import Header from 'common/Header'
// import Banner from 'common/Banner'
import Main from './main'

class Index extends Component {
  render () {
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    )
  }
}

export default Index
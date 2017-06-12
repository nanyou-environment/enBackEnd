import React from 'react'
import Goods from './Goods'
import './styles/zoneModule.scss'

class ZoneModule extends React.Component {
  constructor() {
    super()
    this.state = {
      modules: [1,2,3,4,5],
      tag: 0
    }
    this.changeTab = this.changeTab.bind(this)// eslint-disable-line
  }
  changeTab(status) {
    return () => {
      this.setState({
        tag: status
      })
    }
  }
  render () {
    const { modules } = this.state
    // const tagOn = this.state.tag
    return (
      <div className="zone-module">
        <div className="new-modules">
          {
            modules.map(() => {
              return (
                <Goods></Goods>
              )
            })
          }
        </div>
        <section className="section-rank">
          <header className="rank-header">
            <h3>排行</h3>
            <div className="rank-tab">
              <span className="rank-tab-item" onClick={this.changeTab(0)}>全部</span>
              <span className="rank-tab-item " onClick={this.changeTab(1)}>原创</span>
            </div>
          </header>
          <div className="rank-list-main">
            <ul className="rank-list hot-list">
              <li className="rank-item">fafa</li>
              <li className="rank-item">fafa</li>
              <li className="rank-item">fa</li>
              <li className="rank-item">fafa</li>
              <li className="rank-item">fa</li>
              <li className="rank-item">fafa</li>
              <li className="rank-item">fafa</li>
            </ul>
            <ul className="rank-list origin-list">
              <li className="rank-item">rfafa</li>
              <li className="rank-item">rfafa</li>
              <li className="rank-item">fafa</li>
              <li className="rank-item">fafa</li>
              <li className="rank-item">fafa</li>
              <li className="rank-item">fafa</li>
              <li className="rank-item">fafa</li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default ZoneModule

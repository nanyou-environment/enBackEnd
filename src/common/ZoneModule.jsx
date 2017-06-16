import React from 'react'
import ui from 'redux-ui'
import PropTypes from 'prop-types'
import Goods from './Goods'
import './styles/zoneModule.scss'


class ZoneModule extends React.Component {
  constructor() {
    super()
    this.state = {
      tag: 0
    }
    this.changeTab = this.changeTab.bind(this)// eslint-disable-line
  }
  changeTab(status) {
    return () => {
      this.props.updateUI({
        tag: status
      })
    }
  }
  render () {
    const { modules } = this.props
    const { tag } = this.props.ui
    return (
      <div className="zone-module">
        <div className="new-modules">
          {
            modules.map((item, index) => {
              return (
                <Goods data={item} key={`goods${item.id}${item.scope}${index}`}></Goods>
              )
            })
          }
        </div>
        <section className="section-rank">
          <header className="rank-header">
            <h3>排行</h3>
            <div className="rank-tab">
              <span className={`rank-tab-item ${tag === 0 ? 'on' : ''}`} onClick={this.changeTab(0)}>全部</span>
              <span className={`rank-tab-item ${tag === 1 ? 'on' : ''}`} onClick={this.changeTab(1)}>原创</span>
            </div>
          </header>
          <div className={`rank-list-main ${tag === 0 ? '' : 'slide-left'}`}>
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

ZoneModule.propTypes = {
  ui: PropTypes.object.isRequired,
  modules: PropTypes.array.isRequired
}

const ZoneModuleWithUi = ui({
  key: 'ZoneModule',
  state: {
    tag: 0
  }
})(ZoneModule)

export default ZoneModuleWithUi

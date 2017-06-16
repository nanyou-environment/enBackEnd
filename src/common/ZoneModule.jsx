import React from 'react'
import ui from 'redux-ui'
import PropTypes from 'prop-types'
import Goods from './Goods'
import NewsItem from './newsItem'
import './styles/zoneModule.scss'


class ZoneModule extends React.Component {
  constructor() {
    super()
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
    const { modules, news } = this.props
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
              {
                news.map((item, index) => {
                  return (
                    <NewsItem key={index+1} data={item} index={index} className="rank-item">fafa</NewsItem>
                  )
                })
              }
              <div style={{ textAlign: 'center', lineHeight: '30px', fontSize: '14px', backgroundColor: '#e5e9ef', marginTop: '10px', borderRadius: '3px'}}>加载更多...</div>
            </ul>
            <ul className="rank-list origin-list">
              {
                news.map((item, index) => {
                  return (
                    <NewsItem key={index+1} data={item} index={index} className="rank-item">fafa</NewsItem>
                  )
                })
              }
              <div style={{ textAlign: 'center', lineHeight: '30px', fontSize: '14px', backgroundColor: '#e5e9ef', marginTop: '10px',borderRadius: '3px'}}>加载更多...</div>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

ZoneModule.propTypes = {
  ui: PropTypes.object.isRequired,
  modules: PropTypes.array.isRequired,
  news: PropTypes.array.isRequired
}

const ZoneModuleWithUi = ui({
  key: 'ZoneModule',
  state: {
    tag: 0
  }
})(ZoneModule)

export default ZoneModuleWithUi

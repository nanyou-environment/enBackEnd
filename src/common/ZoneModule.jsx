import React from 'react'
import Goods from './Goods'
import './styles/zoneModule.scss'

class ZoneModule extends React.Component {
  constructor() {
    super()
    this.state = {
      modules: [1,2,3,4,5]
    }
  }
  render () {
    const { modules } = this.state
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
        <section className="section-rank"></section>
      </div>
    )
  }
}

export default ZoneModule

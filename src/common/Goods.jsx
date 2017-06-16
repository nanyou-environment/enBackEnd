import React , { Component }from 'react'// eslint-disable-line
import PropTypes from 'prop-types'
import './styles/goods.scss'

class Goods extends Component {
  render () {
    const good = this.props.data
    return (
      <figure className="goods-module">
        <img className="goods-pic" src={good.img}/>
        <figcaption>{good.title}</figcaption>
        <p className="num">
          <span className="play"></span>
          <span className="danmu"></span>
        </p>
      </figure>
    )
  }
}

Goods.propTypes = {
  data: PropTypes.object.isRequired
}

export default Goods

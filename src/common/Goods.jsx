import React , { Component }from 'react'// eslint-disable-line
import PropTypes from 'prop-types'
import './styles/goods.scss'

class Goods extends Component {
  constructor(props, context) {
    super(props, context)
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
  }
  onMouseEnterHandler(ev) {
    const selector = ev.currentTarget
    const currentDom = selector.getElementsByClassName('num')[0]
    currentDom.style.bottom = '-20px'
  }
  onMouseLeaveHandler(ev) {
    const selector = ev.currentTarget
    const currentDom = selector.getElementsByClassName('num')[0]
    currentDom.style.bottom = '0'
  }
  render() {
    const good = this.props.data
    return (
      <figure
        className="goods-module"
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
        <img className="goods-pic" src={good.img}/>
        <figcaption className="title">{good.title}</figcaption>
        <p className="num">
          <span className="play">{good.read}</span>
          <span className="danmu">{good.author}</span>
        </p>
      </figure>
    )
  }
}

Goods.propTypes = {
  data: PropTypes.object.isRequired
}

export default Goods

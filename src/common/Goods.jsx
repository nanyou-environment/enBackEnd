import React , { Component }from 'react'// eslint-disable-line
import './styles/goods.scss'

class Goods extends Component {
  render () {
    return (
      <figure className="goods-module">
        <img className="goods-pic" src="//i0.hdslb.com/bfs/archive/053c54ef99b1dc36dfd09f46ad9d086555ea1733.jpg@320w_200h.webp"/>
        <figcaption>【魁拔归来】请还《魁拔》一张电影票，不要再让《魁拔4》重蹈前作惨剧素材由青青树b战官方账号 授权@青青树动画公司</figcaption>
        <p className="num">
          <span className="play"></span>
          <span className="danmu"></span>
        </p>
      </figure>
    )
  }
}

export default Goods

import React , { Component }from 'react'// eslint-disable-line
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './styles/newsItem.scss'

class NewsItem extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const feed = this.props.data
    const index = this.props.index
    const numberClass = classNames({
      'news-number': feed.img === null,
      'number': feed.img !== null
    })
    const titleClass = classNames({
      title1: feed.img === null,
      title2: feed.img !== null
    })
    return (
      <div className="news-module">
        <span className={numberClass}>{index}</span>
        {
          feed.img !== null &&
            <img className="img" src={feed.img} />
        }
        <span className={titleClass}>{feed.title}</span>
      </div>
    )
  }
}

NewsItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default NewsItem

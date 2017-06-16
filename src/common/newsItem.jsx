import React , { PureComponent }from 'react'// eslint-disable-line
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './styles/newsItem.scss'

class NewsItem extends PureComponent {
  render() {
    const feed = this.props.feed
    const index = this.props.index
    const numberClass = classNames({
      'news-number': feed.img === null,
      number: feed.img !== null
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
            <img className="img" src={feed.img} alt="bi" />
        }
        <span className={titleClass}>{feed.title}</span>
      </div>
    )
  }
}

NewsItem.defaultProps = {
  feed: null,
  index: -1
}

NewsItem.propTypes = {
  feed: PropTypes.shape({
    img: PropTypes.string
  }),
  index: PropTypes.number.isRequired
}

export default NewsItem

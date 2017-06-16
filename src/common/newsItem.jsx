import React , { Component }from 'react'// eslint-disable-line
import PropTypes from 'prop-types'
import './styles/newsItem.scss'

class NewsItem extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const feed = this.props.data
    const index = this.props.index
    return (
      <div className="news-module">
        <span className="news-number">{index}</span>
        {
          feed.img !== null &&
            <img className="img" src={feed.img} />
        }
        <span className="title">{feed.title}</span>
      </div>
    )
  }
}

NewsItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default NewsItem

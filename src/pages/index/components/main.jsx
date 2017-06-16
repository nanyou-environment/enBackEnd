import React , { Component }from 'react'// eslint-disable-line
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { connect } from 'modules/react-redux/src'
import ZoneModule from 'common/ZoneModule'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getTags, getNews } from '../../../action/indexPageActon'
import './styles/main.scss'

class Main extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      flag: 0,
      test: 'hello world'
    }
  }
  componentWillMount() {
    this.loadData.bind(this)()
  }
  shouldComponentUpdate(nextProps) {
    window.console.log(nextProps)
    return true
  }
  loadData() {
    const actions = this.props.actions
    actions.getTags()
    actions.getNews()
  }
  render() {
    return (
      <div className="index-wrapper">
        <ZoneModule modules={this.props.tags} news={this.props.news} />
      </div>
    )
  }
}

Main.propTypes = {
  actions: PropTypes.func.isRequired,
  news: PropTypes.shape.isRequired,
  tags: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    tags: state.indexPage.tags,
    news: state.indexPage.news
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getTags,
      getNews
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

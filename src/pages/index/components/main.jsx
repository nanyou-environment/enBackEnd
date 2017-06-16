import React , { Component }from 'react'// eslint-disable-line
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { connect } from 'modules/react-redux/src'
import ZoneModule from 'common/ZoneModule'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getTags } from '../../../action/tag'
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
  // shouldComponentUpdate() {
  //   return false
  // }
  loadData() {
    const actions = this.props.actions
    actions.getTags()
  }
  render () {
    return (
      <div className="index-wrapper">
        <ZoneModule modules={this.props.tags}></ZoneModule>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tags: state.tags.tags
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getTags
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

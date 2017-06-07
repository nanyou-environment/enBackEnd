import { Component } from 'react'

class App extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        <h2>headers</h2>
        {this.props.children}
      </div>
    )
  }
}

export default App

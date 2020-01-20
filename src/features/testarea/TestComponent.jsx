import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapState = (state) => ({
  data: state.data
})

class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>TestComponent</h1>
        <p>This data from store is { this.props.data }</p>
      </div>
    )
  }
}

export default connect(mapState)(TestComponent)
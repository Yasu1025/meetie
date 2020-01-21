import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions'
import { Button } from 'semantic-ui-react';

const mapState = (state) => (
  {
    data: state.test.data
  }
)

// mapDispatchToProps
const actions = {
  incrementCounter,
  decrementCounter
}

// Action -> reducers -> update state -> view

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>TestComponent</h1>
        <p>This data from store is { data }</p>
        <Button onClick={incrementCounter} positive content="INCREMENT"/>
        <Button onClick={decrementCounter} negative content="DECREMENT"/>
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)
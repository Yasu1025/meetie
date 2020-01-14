import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react'


// Components
import NavBar from '../../features/nav/NavBar/NavBar'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'


class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="meetie main">
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;

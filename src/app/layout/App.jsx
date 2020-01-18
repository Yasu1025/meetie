import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom';

// Components
import NavBar from '../../features/nav/NavBar/NavBar'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage'
import SettingDashboard from '../../features/user/Settings/SettingDashboard'
import EventForm from '../../features/event/EventForm/EventForm'



class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="meetie main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Container>
            </Fragment>
          )}/>
      </Fragment>
    );
  }
}

export default App;

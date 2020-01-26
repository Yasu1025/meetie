import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import cuid from 'cuid'

import { createEvent, updateEvent, deleteEvent } from '../eventActions'

// Components
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

const mapState = (state) => ({
  events: state.events
})

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}

class EventDashboard extends Component {
  state = {
    selectedEvent: null,
    isOpen: false
  }

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    })
  }

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = 'assets/images/user.png';
    this.props.createEvent(newEvent)
    this.setState(({events}) => ({
      isOpen: false
    }))
  }

  handleSelectEvent = (event) => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    })
  }

  handleUpdateEvent = (updatedEvent) => {
    this.props.updateEvent(updatedEvent);
    this.setState(() => ({
      selectedEvent: null,
      isOpen: false
    }))
  }

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id)
  }

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.handleCreateFormOpen} positive content="Create Event" />
          { isOpen &&
            <EventForm
              key={ selectedEvent ? selectedEvent.id : 0 }
              selectedEvent={selectedEvent}
              updateEvent={this.handleUpdateEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel} />
          }
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapState, actions)(EventDashboard)

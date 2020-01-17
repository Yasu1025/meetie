import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  }

  // Lifecycle
  componentDidMount() {
    if(this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      })
    }
  }

  handleInputChange = ({ target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }
  handleFormSubmit = (e) => {
      e.preventDefault();
      if(this.state.id) {
        this.props.updateEvent(this.state);
      } else {
        this.props.createEvent(this.state);
      }
      
  }

  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input 
              name="title"
              onChange={this.handleInputChange}
              value={title}
              autoComplete="off"
              placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input 
              name="date"
              onChange={this.handleInputChange}
              value={date}
              type="date" 
              placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.handleInputChange}
              value={city}
              placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.handleInputChange}
              value={venue}
              placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.handleInputChange}
              value={hostedBy}
              placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button onClick={this.handleFormSubmit} positive type="submit">
            Submit
          </Button>
          <Button onClick={cancelFormOpen} type="button">Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

export default EventForm
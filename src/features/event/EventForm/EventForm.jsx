import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createEvent, updateEvent } from '../eventActions'
import cuid from 'cuid';
import TextInput from '../../../app/common/form/TextInput'
import TextArea from '../../../app/common/form/TextArea'

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if(eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
}

class EventForm extends Component {
  
  state = {...this.props.event}

  handleFormSubmit = (e) => {
    e.preventDefault();
    if(this.state.id) {
      // Update
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`);
    } else {
      // New Create
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: 'assets/images/user.png'
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`);
    }
  }

  render() {    
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            
            <Form>
              <Header sub color="teal" content="Event Detai" />
              <Field name="title" component={TextInput} placeholder="Give your Event name"/>
              <Field name="category" component={TextInput} placeholder="What is your event about?"/>
              <Field name="description" component={TextArea} rows={3} placeholder="Tell us about your event"/>

              <Header sub color="teal" content="Event Location Detail" />
              <Field name="city" component={TextInput} placeholder="Event City"/>
              <Field name="venue" component={TextInput} placeholder="Event Venue"/>
              <Field name="date" component={TextInput} placeholder="Event Date"/>
              <Button onClick={this.handleFormSubmit} positive type="submit">
                Submit
              </Button>
              <Button type="button">Cancel</Button>
            </Form>

          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          aaa
        </Grid.Column>
      </Grid>
      
    )
  }
}

export default connect(mapState, actions)(reduxForm({form: 'eventForm'})(EventForm));
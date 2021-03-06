import React, { Component } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'

import SignedoutMenu from '../Menu/SignedoutMenu'
import SignedinMenu from '../Menu/SignedinMenu'


class NavBar extends Component {
	state = {
		authenticated: false
	}

	handleSignIn = () => this.setState({authenticated: true});
	handleSignOut = () => {
		this.setState({authenticated: false});
		this.props.history.push('/');
	};

	render() {
		const { authenticated } = this.state;

		return (
			<Menu inverted fixed="top">
				<Container>
					<Menu.Item as={NavLink} exact to="/" header>
						<img src="/assets/images/logo.png" alt="logo" />
						Meetie
					</Menu.Item>
					<Menu.Item exact as={NavLink} to="/events" name="Events" />
					<Menu.Item as={NavLink} to="/people" name="People" />
					<Menu.Item as={NavLink} to="/test" name="Test" />
					<Menu.Item>
						<Button as={Link} to="/createEvent" floated="right" positive inverted content="Create Event" />
					</Menu.Item>
					{
						authenticated ? 
							<SignedinMenu signOut={this.handleSignOut}/> : 
							<SignedoutMenu signIn={this.handleSignIn} />
					}
				</Container>
			</Menu>
		)
	}
}

export default withRouter(NavBar)
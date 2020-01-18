import React, { Fragment } from 'react'
import { Grid, Menu, Header } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const SettingNav = () => {
  const BASE_URL = '/settings';

  return (
    <Fragment>
      <Menu vertical>
        <Header icon="user" attached inverted color="grey" content="Profile" />
        <Menu.Item as={NavLink} to={`${BASE_URL}/basic`}>Basics</Menu.Item>
        <Menu.Item as={NavLink} to={`${BASE_URL}/about`}>About Me</Menu.Item>
        <Menu.Item as={NavLink} to={`${BASE_URL}/photos`}>My Photos</Menu.Item>
      </Menu>
      <Grid.Row />
      <Menu vertical>
        <Header
          icon="settings"
          attached
          inverted
          color="grey"
          content="Account"
        />
        <Menu.Item as={NavLink} to={`${BASE_URL}/account`}>My Account</Menu.Item>
      </Menu>
    </Fragment>
  )
}

export default SettingNav
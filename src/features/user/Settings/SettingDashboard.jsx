import React from 'react'
import { Grid } from 'semantic-ui-react'
import SettingNav from './SettingNav'
import { Route, Redirect, Switch } from 'react-router-dom'

import BasicPage from './BasicPage'
import AboutPage from './AboutPage'
import PhotosPage from './PhotosPage'
import AccountPage from './AccountPage'

const SettingDashboard = () => {
  const BASE_URL = '/settings';

  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from={BASE_URL} to={`${BASE_URL}/basic`} />
          <Route path={`${BASE_URL}/basic`} component={BasicPage} />
          <Route path={`${BASE_URL}/about`} component={AboutPage} />
          <Route path={`${BASE_URL}/photos`} component={PhotosPage} />
          <Route path={`${BASE_URL}/account`} component={AccountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>
  )
}

export default SettingDashboard
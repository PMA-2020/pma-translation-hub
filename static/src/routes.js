/* eslint new-cap: 0 */

import React from 'react'
import { Route } from 'react-router'

/* containers */
import { App } from './containers/App/index'
import { HomeContainer } from './containers/HomeContainer/index'
import LoginView from './components/LoginView'
import RegisterView from './components/RegisterView'
import ProtectedView from './components/ProtectedView'
import UserManagement from './components/UserManagement'
import Settings from './components/Settings'
import NotFound from './components/NotFound'

import { DetermineAuth } from './components/DetermineAuth'
import { requireAuthentication } from './components/AuthenticatedComponent'
import { requireNoAuthentication } from './components/notAuthenticatedComponent'

export default (
    <Route path="/" component={App}>
        <Route path="main" component={requireAuthentication(ProtectedView)} />
        <Route path="login" component={requireNoAuthentication(LoginView)} />
        <Route path="register" component={requireNoAuthentication(RegisterView)} />
        <Route path="home" component={requireNoAuthentication(HomeContainer)} />
        <Route path="users" component={requireAuthentication(UserManagement)} />
        <Route path="settings" component={requireAuthentication(Settings)} />
        <Route path="*" component={DetermineAuth(NotFound)} />
    </Route>
)

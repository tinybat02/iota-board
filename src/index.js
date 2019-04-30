import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import NotFoundPage from './components/NotFoundPage'
import ResetPassword from './components/ResetPassword'
import SearchWithoutLogin from './components/SearchWithoutLogin'
import NavBar from './components/NavBar'
import TestMap from './components/TestMap'
import 'semantic-ui-css/semantic.min.css'

const routes = (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/reset_password" component={ResetPassword}/>
      <Route path="/search" component={SearchWithoutLogin}/>
      <Route path="/test" component={TestMap}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('app')
)

module.hot.accept()
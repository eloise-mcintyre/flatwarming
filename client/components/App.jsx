import React from 'react'
import LogIn from './LogIn'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Register from './Register'
import Nav from './Nav'
import { Container } from 'semantic-ui-react'
import RegisterFlatFetails from './RegisterFlatDetails'
import Dashboard from './Dashboard'
import Welcome from './Welcome'
import Setting from './Setting'

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>

          <Route path='/' component={Nav} />
          <Route exact path='/' component={Welcome} />

          <Switch>
            <Route exact path='/register-flat/:userid' component={RegisterFlatFetails} ></Route>
            <Route path='/register' component={Register} />
            <Route exact path='/log-in' component={LogIn} ></Route>
            <Route path='/dashboard/:usersId' component={Dashboard} ></Route>
          </Switch>
          <Route exact path='/setting/:id' component={Setting} />
        </Router>
      </div>
    )
  }
}

export default App

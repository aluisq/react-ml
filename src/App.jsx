
import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import Routes from './routes'
import history from './history'
import {AuthProvider} from './components/Context/AuthContext'


class App extends Component {

  render() {
    return(
      <AuthProvider>
        <Router history={history}>
          <Routes/>
        </Router>
      </AuthProvider>
    )
  }
}

export default App;


import React, { Component } from 'react';
import Navbar from './components/Navbar/navbar';
import Login from './pages/login';
import Teste from './pages/teste';

  class App extends Component {

  render() {
    return(
      <Login path={'/login'}/>
      // <Teste/>
    )
  }
}

export default App;

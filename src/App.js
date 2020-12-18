import React, { Component } from 'react';
import './App.css'

import Nav from './Navbar/Nav';
import AllComponents from './components/allcomponents/AllComponents';


 class App extends Component {
  render() {
    return (
      <div className="d-flex">
      <header >
          <Nav />
      </header>

      <section >
          <AllComponents />
      </section>
      </div>
    )
  }
}

export default App

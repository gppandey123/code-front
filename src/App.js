import React, { Component } from 'react';
import './App.css'

import Nav from './Navbar/Nav';
import AllComponents from './components/allcomponents/AllComponents';


 class App extends Component {
   state = {
     openModel : true
   }

   setModel = () => {
     this.setState(() => {

      return {openModel : false}
     } ,this.againSame);
   }
   againSame = () => {
     this.setState({openModel : true});
   }

   
  render() {
    return (
      <div className="d-flex">
      <header >
          <Nav openModel={this.state.openModel} setModel={this.setModel}/>
      </header>

      <section >
          <AllComponents openModel={this.state.openModel} setModel={this.openModel}/>
      </section>
      </div>
    )
  }
}

export default App

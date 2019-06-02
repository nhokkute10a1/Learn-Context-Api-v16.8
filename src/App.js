import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';


class App extends Component {
  state = {}
  render() {
    return (
     <div>
        <Navbar />
        <Form/>
     </div>
    );
  }
}
export default App;

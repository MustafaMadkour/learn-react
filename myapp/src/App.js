import React, { Component } from 'react';
import Mad from './Mad';

class App extends Component {
  state = {
    mads: [
      {name: 'Mustafa', age: 30, city: 'Alexandria', id: 1},
      {name: 'Mohamed', age: 25, city: 'Cairo', id: 2},
      {name: 'Ahmed', age: 40, city: 'Aswan', id: 3}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <Mad mads={ this.state.mads }/>
      </div>
    );
  }
}

export default App;

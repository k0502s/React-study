import React, { Component } from 'react';
import Name from './Name';
import Counter from './Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Counter />
      
      <Name name="김진석" />
      </div>
      
  
    );
  }
  
}

export default App;



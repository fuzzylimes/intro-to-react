import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working!</p>
        <Person name="fuzzylimes" age="30"/>
        <Person name="Bob" age="45">Hobbies: Cooking</Person>
        <Person name="Jane" age="39"/>
      </div>
    );
    // All of the JSX above gets converted to the following when compiled.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;

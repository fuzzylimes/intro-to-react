import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'fuzzylimes', age: 30 },
      { name: 'Bob', age: 45 },
      { name: 'Jane', age: 39 }
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // this.state.persons[0].name = 'Zach';
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Bob', age: 45 },
        { name: 'Jane', age: 38 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Zach')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'fuzzylimes')}>Hobbies: Cooking</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // All of the JSX above gets converted to the following when compiled.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;

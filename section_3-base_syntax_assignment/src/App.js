import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Bob',
    hobbies: "Cooking, Complaining"
  }

  nameChangedHandler = (event) => {
    this.setState({
      username: event.target.value,
      hobbies: "Cooking, Complaining"
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Section 4 Assignment</h1>
        <UserInput 
          changed={this.nameChangedHandler}
          username={this.state.username} />
        <UserOutput 
          username={this.state.username} 
          hobbies={this.state.hobbies}/>
        <UserOutput username="Bill" hobbies="Sleeping, Cleaning"/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char';

class App extends Component {
  state = {
    userInput: '',
    inputLength: 0
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value, inputLength: event.target.value.length});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText, inputLength: updatedText.length});
  }
  
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>
    });

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput} />
        <p>{this.state.inputLength}</p>
        <Validation inputLength={this.state.inputLength}/>
        {charList}
      </div>
    );
  }
}

export default App;

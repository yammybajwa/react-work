import React, { component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characher :[
       
      ]

    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(user => this.setState({characher : user}))
  }
  render() {
    return (
      <div className="App">
        {this.state.characher.map(characher => <h1 key={characher.id}>{characher.name}</h1>)}
      </div>
    );
  }
}

export default App;

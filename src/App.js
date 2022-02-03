import React, { component } from "react";

import { CardList } from "./components/card-list.component";

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characher: [

      ]

    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(user => this.setState({ characher: user }))
  }
  render() {
    return (
      <div className="App">
        <CardList name="Zain">
          {this.state.characher.map(characher => <h1 key={characher.id}>{characher.name}</h1>)}
        </CardList>
      </div>
    );
  }
}

export default App;

import React, { component } from "react";

import { CardList } from "./components/card-list.component";

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characher: [],
      searchField: ''

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
        <input type='search' placeholder="Search Monster" onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList characher={this.state.characher} />

      </div>
    );
  }
}

export default App;

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
    const {characher,searchField} =this.state;
    const filteredCharacter = characher.filter(characher =>
      characher.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <input type='search' placeholder="Search Monster" onChange={e => this.setState({ searchField : e.target.value })} />
        <CardList characher={filteredCharacter}/>
      </div>
    );
  }
}

export default App;

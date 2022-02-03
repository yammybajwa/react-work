import React, { component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characher :[
        {
          name: "Yammy",
          id:"asd4"
        },
        {
          name: "Franky",
          id:"agd5"

        },
        {
          name: "John",
          id:"adt8"

        }
      ]

    }
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

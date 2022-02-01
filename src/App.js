import React ,{component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Practice Makes A Man Perfect
          </p>
          <button>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;

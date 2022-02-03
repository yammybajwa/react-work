import React ,{component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      String:"My Name is zain"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.String}

           </p>
          <button onClick={()=> this.setState({String:"Yammy Is Here"})}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;

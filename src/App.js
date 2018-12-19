import React, {Component} from 'react';
import './App.css';
import Layouts from "./Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layouts type="primary">Button</Layouts>
      </div>
    );
  }
}

export default App;

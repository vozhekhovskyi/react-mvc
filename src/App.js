import React from 'react';

import logo from './logo.svg';
import './App.css';
import { View1 } from './presentation/view1/View';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            onClick={() => this.setState(prev => ({ show: !prev.show }))}
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.show && <View1/>}
        </header>
      </div>
    );
  }
}

export default App;

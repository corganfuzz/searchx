import React, { Component } from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import Searchx from './Searchx';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchx />
      </div>
    );
  }
}

export default App;


/**
 * Root component
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import WinesDisplay from './WinesDisplay.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>This is WinesDisplay</h1>
        <WinesDisplay/>
      </div>
    );
  }
};

export default App;
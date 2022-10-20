
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
       
        <WinesDisplay />
      </div>
    );
  }
};

export default App;
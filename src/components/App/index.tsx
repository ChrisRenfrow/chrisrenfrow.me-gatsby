import * as React from 'react';

import './style.css';
const logo = require('./logo.svg');

// https://stackoverflow.com/questions/44369706/react-typescript-usage-of-classname-prop
class App extends React.Component<React.HTMLAttributes<HTMLDivElement>> {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Corner of the Web</h2>
        </div>
        <p className="App-intro">
          There's not much here right now...
        </p>
      </div>
    );
  }
}

export default App;

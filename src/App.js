import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Hero from './Hero';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={Hero}/>
          <Route path="/m/hithere" render={() => (<h1>sdfsdfsd</h1>)}/>
          <Route path="/m/lol" render={() => (<h1>ssssssssss</h1>)}/>
        </div>
      </Router>
    );
  }
}

export default App;

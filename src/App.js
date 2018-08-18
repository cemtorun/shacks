import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Hero from './Hero';
import Map from './Map';
import Pay from './Pay';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Route exact={true} path="/" component={Hero}/>
            <Route path="/m/map" component={Map}/>
            <Route path="/m/pay" component={Pay}/>
          </div>
      </Router>
    );
  }
}

export default App;

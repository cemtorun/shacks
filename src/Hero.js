import React, { Component } from 'react';
import bg from './bg.png';

class Home extends Component {
  render() {
    return (
      <div className="hero">
      <img className="home" src={bg}/>
      <button><a href="/m/map"><h1> > </h1></a></button>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import map from './map.jpg';

class Map extends Component {
  render() {
    return (
      <div className="map animate bounceInLeft">
        <img src={map}/>
        <button><a href="/m/pay"><h1> > </h1></a></button>
      </div>
    );
  }
}

export default Map;

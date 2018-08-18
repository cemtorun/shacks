import React, { Component } from 'react';
import pay from './pay.jpg';

class Map extends Component {
  render() {
    return (
      <div className="pay animate bounceInLeft">
        <img src={pay}/>
        <div className="btns">
            <button style={{float: "left"}}><a href="/m/pay"><h3>PAY</h3></a></button>
            <button style={{float: "right"}}><a href="/m/pay"><h3>REQUEST</h3></a></button>
        </div>
      </div>
    );
  }
}

export default Map;

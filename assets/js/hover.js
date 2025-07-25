import React from 'react';
import ReactDOM from 'react-dom';
import Spline from '@splinetool/react-spline';

function HoverRobot() {
  return (
    <Spline scene="https://my.spline.design/3dvoxelavatar-p8PAww2CORJQQ9M4kOu3ImK6/" />
  );
}

// Render the Spline animation into the div
ReactDOM.render(<HoverRobot />, document.getElementById('hover-robot'));
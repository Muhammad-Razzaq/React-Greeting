import React from 'react';
import ReactDOM from 'react-dom';
import './../src/index.css';

let currentDate = new Date(2021, 2, 17, 24); // You can change hours from here
currentDate = currentDate.getHours();
let greeting = "";
const cssStyle = {};

if (currentDate >= 1 && currentDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "Green";
}
else if (currentDate >= 12 && currentDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
}
else {
  greeting = "Good Night";
  cssStyle.color = "Purple";
}

ReactDOM.render(
  <React.StrictMode>
    <h1><span style={{color:"whitesmoke"}}>Hello Abdul, </span><span style={cssStyle}>{greeting}</span> </h1>
  </React.StrictMode>,
  document.getElementById('root')
);
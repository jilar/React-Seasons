import React from "react";
import ReactDOM from "react-dom";

const App =() => {
  window.navigator.geolocation.getCurrentPosition(
    //success callback function
    (position) => console.log(position),
    //failure callback funtion
    (err) => console.log(err)
  );

  return(
    <div> Hi there!</div>
  )
};



ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

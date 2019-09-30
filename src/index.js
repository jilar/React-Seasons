import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"

//class Component always extends React.Component
class App extends React.Component{
  // //construction class particular to javascript, called when instance of app component is created
  // constructor(props){
  // //required, constructor function from React.component
  //   super(props);
  // //ONLY TIME to do direct assignment
  // //to this.state
  //   this.state={lat: null, errorMessage:''};
  // }
  state={lat: null, errorMessage:''};
  //happens upon first render, place initial data loading here
  componentDidMount(){
    //get geolocation
    window.navigator.geolocation.getCurrentPosition(
      //success callback function
      (position) => {
        //update state with setState
        this.setState({lat:position.coords.latitude});
      },
      //failure callback funtion
      (err) => {
        this.setState({errorMessage:err.message})
      }
    );
  }
  //happens with each class update; occurs AFTER render() is invoked
  componentDidUpdate(){

  }

  //class component must always have a render() method
  //dont initialize anything in render method,
  render() {
      if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>;
      } else if(!this.state.ErrorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat}/>;
      }
        return <div>Loading</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

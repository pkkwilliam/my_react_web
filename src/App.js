import React, { Component } from "react";
import "./App.css";
import AppContext from "./context/appContext";
import Display from "./Display";

export default class App extends Component {
  state = {
    value: [],
  };

  render() {
    fetch("http://127.0.0.1:8081/actuator/health", {
      mode: "cors",
    }).then((result) => console.log(result));

    return (
      <AppContext.Provider
        value={{
          value: this.state.value,
          addValue: this.addValue,
          removeValue: this.removeValue,
        }}
      >
        <Display />
      </AppContext.Provider>
    );
  }

  addValue = (value) => {
    console.log("addValue");
    this.setState({
      value: this.state.value.concat(value),
    });
  };

  removeValue = (index) => {
    console.log("remove value");
  };
}

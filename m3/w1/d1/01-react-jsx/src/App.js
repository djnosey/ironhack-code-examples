import React from "react";
import "./App.css"; // with React CSS files are imported directly into the .js file

import Example from "./Example";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        <h3>React Intro </h3>
        <Example />
      </div>
    );
  }
}

export default App;

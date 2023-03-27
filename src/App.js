import React from "react";
import "./App.scss";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <div className="App">
        <Home />
      </div>
      <About />
      <Projects />
    </div>
  );
}

export default App;

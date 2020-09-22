import React from "react";
// import "./App.css";
import "fontsource-roboto";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <HomePage path="/"></HomePage>
          <Profile path="/profile"></Profile>
        </Router>
      </header>
    </div>
  );
}

export default App;

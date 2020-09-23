import React from "react";
// import "./App.css";
import "fontsource-roboto";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";
import Profile from "./profile/Profile";
import SearchDates from "./components/SearchDates";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <HomePage path="/"></HomePage>
          <Profile path="/profile"></Profile>
          <SearchDates path="/search"></SearchDates>
        </Router>
      </header>
    </div>
  );
}

export default App;

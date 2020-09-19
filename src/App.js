import React from "react";
// import "./App.css";
import "fontsource-roboto";
import HomePage from "./components/HomePage";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage></HomePage>
      </header>
    </div>
  );
}

export default withAuthenticator(App);

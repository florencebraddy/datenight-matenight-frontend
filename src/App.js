import React from "react";
// import "./App.css";
import "fontsource-roboto";
import HomePage from "./components/HomePage";
// import Theme from "./Theme";
// import { ThemeProvider } from "@material-ui/styles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ThemeProvider theme={Theme}> */}
        <HomePage></HomePage>
        {/* </ThemeProvider> */}
      </header>
    </div>
  );
}

export default App;

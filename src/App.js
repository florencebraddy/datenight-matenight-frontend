import React from "react";
// import "./App.css";
import "fontsource-roboto";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";
import Profile from "./profile/Profile";
import SearchDates from "./components/SearchDates";
import PrivateRoutes from "./pages/PrivateRoutes";
import PublicRoutes from "./pages/PublicRoutes";

function App() {
  const [signedInUser, setSignedInUser] = React.useState(undefined);

  if (!signedInUser) {
    return (
      <div className="App">
        <header className="App-header">
          <PublicRoutes signedInUser={signedInUser}></PublicRoutes>
          {/* <Router>
            <HomePage path="/" setSignedInUser={setSignedInUser}></HomePage>
            <Profile path="/profile"></Profile>
            <SearchDates path="/search"></SearchDates>
          </Router>  */}
        </header>
      </div>
    );
  }
  return <PrivateRoutes signedInUser={signedInUser} />;
}

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Router>
//           <HomePage path="/" setSignedInUser={setSignedInUser}></HomePage>
//           <Profile path="/profile"></Profile>
//           <SearchDates path="/search"></SearchDates>
//         </Router>
//       </header>
//     </div>
//   );
// }

export default App;

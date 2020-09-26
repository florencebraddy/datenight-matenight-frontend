import React from "react";
import { Router } from "@reach/router";
import HomePage from "../components/HomePage";
import SearchDates from "../components/SearchDates";
import Profile from "../profile/Profile";
// import NotFound from "../components/NotFound";

const PrivateRoutes = ({ signOut, signedInUser }) => {
  return (
    <Router>
      <HomePage path="/" signOut={signOut} />
      <SearchDates path="/search/activities"></SearchDates>
      <Profile path="/profile"></Profile>
      {/* <NotFound default /> */}
    </Router>
  );
};

export default PrivateRoutes;

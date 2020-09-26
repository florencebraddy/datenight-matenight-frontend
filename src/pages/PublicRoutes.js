import React from "react";
import { Router } from "@reach/router";
import HomePage from "../components/HomePage";
// import LogIn from "./Log";
// import SignUp from "../components/SignUp";
import SearchDates from "../components/SearchDates";
const PublicRoutes = ({ setSignedInUser }) => {
  return (
    <Router>
      <HomePage path="/" setSignedInUser={setSignedInUser}></HomePage>
      {/* <Profile path="/profile"></Profile> */}
      <SearchDates path="/search/activities"></SearchDates>
    </Router>
  );
};

export default PublicRoutes;

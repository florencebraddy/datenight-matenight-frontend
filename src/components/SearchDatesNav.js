import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";

const SearchDatesNav = ({ toggle, setToggle, setQuery }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" align="center">
          Dates
        </Typography>
        <Input onChange={event => setQuery(event.target.value)}></Input>
        <Button onClick={() => setToggle(!toggle)} color="inherit">
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default SearchDatesNav;

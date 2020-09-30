import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import Container from "@material-ui/core/Container";
import { Input, makeStyles } from "@material-ui/core";
import { navigate } from "@reach/router";
import HomeIcon from "@material-ui/icons/Home";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  search: {
    textDecoration: "none"
  },
  input: {
    backgroundColor: "white",
    textDecoration: "none",
    padding: "0.2px",
    width: "200px",
    height: "30px",
    borderRadius: "10px"
    // border: "2px solid #FFFFFF",
    // outline: "none"
  },
  search: {
    color: "white"
  },
  nav: {
    backgroundColor: "transparent",
    color: "black"
  },
  button: {
    color: "white"
  },
  title: {
    fontSize: "50px",
    fontFamily: "Julius Sans One",
    fontWeight: "bold",
    color: "#69bdd2",
    flexGrow: 0.6,
    padding: "20px"
  },
  pick: {
    fontSize: "20px",
    color: "white"
  }
}));

function returnHome() {
  navigate("/");
}

const SearchDatesNav = ({ toggle, setToggle, setQuery }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Button
            className={classes.button}
            startIcon={<HomeIcon style={{ color: "#69bdd2" }} />}
            onClick={returnHome}
          >
            Home
          </Button>
          <Button
            style={{ textDecoration: "none" }}
            className={classes.search}
            onClick={() => setToggle(!toggle)}
            color="inherit"
            fontFamily="Neucha"
          >
            <Input
              style={{ textDecoration: "none" }}
              className={classes.input}
              onChange={event => setQuery(event.target.value)}
            ></Input>
            Search
          </Button>
          <Typography
            variant="h1"
            align="center"
            className={classes.title}
            noWrap={true}
          >
            Search for the perfect date
          </Typography>
          <Button
            className={classes.pick}
            endIcon={<CheckBoxIcon style={{ color: "#69bdd2" }} />}
          >
            Want us to pick for you?
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchDatesNav;

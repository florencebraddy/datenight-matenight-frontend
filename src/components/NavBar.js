import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/grid";
import Modal from "@material-ui/core/Modal";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import SearchIcon from "@material-ui/icons/Search";
import { navigate } from "@reach/router";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: "transparent",
    color: "black"
  },
  button: {
    backgroundColor: "transparent"
  }
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

function searchNavigation() {
  navigate("/search/activities");
}

export default function NavBar({ setSignedInUser }) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [signUp, setSignUpOpen] = React.useState(false);
  const [logIn, setLogInOpen] = React.useState(false);

  const signUpOpen = () => {
    setSignUpOpen(true);
  };

  const logInOpen = () => {
    setLogInOpen(true);
  };

  const handleClose = () => {
    setSignUpOpen(false);
    setLogInOpen(false);
  };

  return (
    <AppBar className={classes.main}>
      <Toolbar>
        <Grid justify="space-between" container spacing={30}>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<SearchIcon />}
            onClick={searchNavigation}
          >
            Search Dates
          </Button>
          <Grid>
            <Button
              classesName={classes.button}
              color="inherit"
              onClick={logInOpen}
            >
              Log In
            </Button>
            <Modal
              open={logIn}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <LogIn setSignedInUser={setSignedInUser} />
            </Modal>
            <Button
              classesName={classes.button}
              color="inherit"
              onClick={signUpOpen}
            >
              Sign Up
            </Button>
            <Modal
              open={signUp}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <SignUp />
            </Modal>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

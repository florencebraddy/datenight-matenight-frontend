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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    backgroundColor: "transparent",
    color: "black"
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
export default function NavBar() {
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
    <div className={classes.root} container="fluid">
      <AppBar className={classes.main}>
        <Toolbar>
          <Grid justify="space-between" container spacing={40}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
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
              <LogIn />
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

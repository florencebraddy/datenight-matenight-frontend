import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    backgroundColor: "transparent",
    color: "black"
  }
}));

export default function NavBar() {
  const classes = useStyles();

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
            <Button classesName={classes.button} color="inherit">
              Login
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

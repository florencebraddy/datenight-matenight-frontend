import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "./Button";
import MiddleSection from "./MiddleSection";
import NavBar from "./NavBar";
import Card from "@material-ui/core/Card";

const backgroundImage =
  "https://images.unsplash.com/photo-1512187849-463fdb898f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  topsection: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundColor: "transparent",
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  navbar: {
    //gotta figure this one out
    // position: "fixed"
    sticky: "top"
  },
  button: {
    position: "relative",
    display: "flex",
    height: "50px",
    opacity: "0.5"
  },
  card: {
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    boxShadow: "none"
  },
  typography: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    padding: "300px"
  },
  middlesection: {
    display: "flex",
    flexDirection: "column"
  }
}));

export default function HomePage({ setSignedInUser }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar
        className={classes.navbar}
        setSignedInUser={setSignedInUser}
      ></NavBar>
      <Grid container spacing={8}>
        <Grid className={classes.topsection} item xs>
          <Typography className={classes.typography} noWrap={true} variant="h1">
            DATE NIGHT | MATE NIGHT
          </Typography>
          <Card className={classes.card}>
            <Button className={classes.button}>Sign Up Now!</Button>
          </Card>
        </Grid>
        <Grid className={classes.middlesection} item xs>
          <MiddleSection></MiddleSection>
        </Grid>
      </Grid>
    </div>
  );
}

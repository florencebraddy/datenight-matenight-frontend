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
    position: "absolute",
    top: "0",
    left: "0",
    minWidth: "100%",
    minHeight: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

    // backgroundPosition: "center",
    // backgroundColor: "transparent",
    // position: "relative",
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat"
    // minHeight: "100%"
  },
  navbar: {
    position: "fixed"
  },
  button: {
    position: "relative",
    display: "flex",
    height: "50px",
    opacity: "0.9"
  },
  buttoncard: {
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
    padding: "250px"
  },
  middlesection: {
    display: "flex",
    flexDirection: "column"
  },
  info: {
    display: "flex",
    justifyContent: "center space-between",
    alignContent: "center",
    flexFlow: "column wrap",
    backgroundColor: "transparent",
    position: "absolute"
  },
  infotitle: {
    fontSize: "30px",
    padding: "20px",
    margin: "20px"
  },
  infotext: {
    color: "white",
    fontSize: "20px",
    alignContent: "center",
    padding: "20px",
    margin: "20px"
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
          <Card className={classes.info}>
            <Typography className={classes.infotitle} variant="subtitle1">
              The Perfect Date Night
            </Typography>
            <Typography
              variant="body1"
              className={classes.infotext}
              noWrap={true}
            >
              {
                "Are you and your spouse wondering what to do this Friday night? Do you and your friends keep talking about getting together for some fun?"
              }
              <br />
              {"Can't decide what to do?"}
              <br />
              {
                "Well...you're in the right spot. We help you decide on the perfect day/night for you and your loved ones!"
              }
            </Typography>
          </Card>
          <Card className={classes.buttoncard}>
            <Button className={classes.button}>Search Dates</Button>
          </Card>
        </Grid>
      </Grid>
      {/* <Grid className={classes.middlesection} item xs> */}
      {/* <MiddleSection></MiddleSection> */}
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
}

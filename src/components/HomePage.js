import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
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
    position: "absolute",
    fontFamily: "Special Elite"
  },
  infotitle: {
    fontSize: "35px",
    margin: "10px",
    fontFamily: "Julius Sans One"
  },
  infotext: {
    color: "white",
    fontSize: "25px",
    alignContent: "center",
    margin: "10px",
    fontFamily: "Julius Sans One"
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
              {"Are you and your spouse wondering what to do this weekend?"}

              <br />
              {
                "Do you and your friends keep talking about getting together to hang?"
              }
              <br />

              {"Can't figure out what to do?"}
              <br />

              {
                "Well...you're in the right spot. We help you decide on the perfect date for you and your loved ones!"
              }
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

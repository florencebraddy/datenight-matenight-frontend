import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "./Button";
import SectionHeaders from "./SectionHeaders";
import NavBar from "./NavBar";

const backgroundImage =
  "https://images.unsplash.com/photo-1512187849-463fdb898f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex"
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  button: {
    display: "flex",
    justifyContent: "bottom",
    size: "large"
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Container className={classes.container}>
          <NavBar></NavBar>
          <Typography color="white" align="center" variant="h1" marked="center">
            DATE NIGHT | MATE NIGHT
          </Typography>
          <Button classesName={classes.button}>Sign Up Now!</Button>
          {/* <SectionHeaders></SectionHeaders> */}
          {/* <Grid container spacing={8}> */}
          {/* <Grid item xs={12}>
            <Paper className={classes.paper}>DATE NIGHT | MATE NIGHT</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>CHEEKY SIGN UP HERE</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>USER REVIEWS HERE</Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>SEARCH DATE NIGHTS</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>LOGIN</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
              </Grid> */}
        </Container>
      </div>
    </div>
  );
}

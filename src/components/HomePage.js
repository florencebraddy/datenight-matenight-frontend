import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const backgroundImage =
  "https://images.unsplash.com/photo-1512187849-463fdb898f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80";
console.log(backgroundImage);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "30px",
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9",
    backgroundPosition: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -2
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
        <Grid container spacing={8}>
          <Grid item xs={12}>
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
        </Grid>
      </div>
    </div>
  );
}

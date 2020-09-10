import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "30px",
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

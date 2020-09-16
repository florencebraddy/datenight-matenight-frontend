import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const backgroundImage =
  "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  middlesection: {
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
    height: "100vh"
  }
}));

export default function MiddleSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid className={classes.middlesection} item xs>
          <Typography variant="h6" className={classes.title}>
            The perfect date night
          </Typography>
          <Typography variant="h5">
            {
              "Are you and your spouse wondering what to do this Friday night? Do you and your friends keep talking about getting together for some fun? Can't decide what to do?"
            }
            {
              "Well...you're in the right spot. We help you decide on the perfect day/night for you and your loved ones"
            }
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

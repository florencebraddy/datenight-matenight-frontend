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
  },
  left: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    padding: "10px",
    margin: "100px"
  },
  leftinformation: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    padding: "10px",
    margin: "100px"
  },
  middle: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    padding: "10px"
    // margin: "100px"
  },
  middleinformation: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    padding: "10px",
    margin: "100px"
  },
  right: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    padding: "10px",
    margin: "100px"
  },
  rightinformation: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    padding: "10px",
    margin: "100px"
  }
}));

export default function MiddleSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.middlesection}
        justify="center"
        container
        spacing={8}
      >
        >
        <Grid item sm>
          <Typography variant="h6" className={classes.left}>
            The Perfect Date Night
          </Typography>
          <Typography
            variant="h5"
            className={classes.leftinformation}
            noWrap={false}
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
        </Grid>
        <Grid className={classes.middle} item sm>
          <Typography>Discounts for Members</Typography>
          <Typography
            variant="h5"
            className={classes.middleinformation}
            noWrap={false}
          >
            {
              "Our members recieve the best discounts in town! From board games, to escape rooms, we've got you covered."
            }
          </Typography>
        </Grid>
        <Grid className={classes.right} item sm>
          <Typography>
            Check out hundreds of reviews before you try it
          </Typography>
          <Typography
            variant="h5"
            className={classes.rightinformation}
            noWrap={false}
          >
            {
              "Our network has hundreds of unbiased reviews from real users, so you can get some honest opinions on potential dates."
            }
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

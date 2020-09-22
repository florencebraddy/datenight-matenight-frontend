import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Card } from "@material-ui/core";

const backgroundImage =
  "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  middleSection: {
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
  leftTitle: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    padding: "10px",
    margin: "100px"
  },
  leftInformation: {
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
  middleInformation: {
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
  rightInformation: {
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
        className={classes.middleSection}
        justify="center"
        container
        spacing={8}
      >
        >
        <Grid item sm className={classes.leftSection}>
          <Card className={classes.left}>
            <Typography variant="h6" className={classes.leftTitle}>
              The Perfect Date Night
            </Typography>
            <Typography
              variant="h5"
              className={classes.leftInformation}
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
          </Card>
        </Grid>
        <Grid className={classes.centerSection} item sm>
          <Card className={classes.center}>
            <Typography>Discounts for Members</Typography>
            <Typography
              variant="h5"
              className={classes.centerInformation}
              noWrap={false}
            >
              {
                "Our members recieve the best discounts in town! From board games, to escape rooms, we've got you covered."
              }
            </Typography>
          </Card>
        </Grid>
        <Grid className={classes.rightSection} item sm>
          <Card className={classes.right}>
            <Typography>
              Check out hundreds of reviews before you try it
            </Typography>
            <Typography
              variant="h5"
              className={classes.rightInformation}
              noWrap={false}
            >
              {
                "Our network has hundreds of unbiased reviews from real users, so you can get some honest opinions on potential dates."
              }
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

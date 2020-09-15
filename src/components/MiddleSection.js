import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const backgroundImage =
  "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  background: {
    backgroundPosition: "center",
    backgroundColor: "transparent",
    position: "relative",
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    // height: 55
    position: "absolute"
  },
  title: {
    // marginTop: theme.spacing.unit * 5,
    // marginBottom: theme.spacing.unit * 5
  },
  beach: {
    position: "relative"
  }
}));

export default function MiddleSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={backgroundImage} className={classes.background} alt="beach" />
      <div className={classes.item}>
        <img className={classes.image} src="" alt="" />
        <Typography variant="h6" className={classes.title}>
          The perfect date night
        </Typography>
      </div>
    </div>
  );
}

/* <Typography variant="h5">
          {
            "If you and your spouse of friends are struggling to thihnk of a date night idea"
          }
          {
            "you're in the right spot. We help you decide on the perfect day/night to enjoy with your loved ones"
          }
        </Typography>
      </div>
      </Grid>
      </div>
      </Grid>
      </Grid>
    </div> */

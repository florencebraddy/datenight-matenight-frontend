import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  title: {
    fontFamily: "Barlow Condensed",
    fontSize: "30px",
    fontWeight: "bold"
  }
}));

export default function ProfileAvatar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        alt="Profile Picture"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1024px-Emblem-person-blue.svg.png"
        className={classes.large}
      />
      <Typography className={classes.title} variant="h5" gutterBottom>
        Name
      </Typography>
    </div>
  );
}

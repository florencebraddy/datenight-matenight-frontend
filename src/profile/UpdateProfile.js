import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  m1: {
    margin: "1rem"
  },
  info: {
    fontFamily: "Barlow Condensed",
    fontSize: "30px",
    fontWeight: "bold"
  },
  button: {
    margin: "1rem",
    backgroundColor: "#687ca1",
    color: "white"
  }
}));

export default function Chart() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.info} variant="h6" gutterBottom>
        General Information
      </Typography>
      <form className={classes.container}>
        <TextField
          className={classes.m1}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
        />
        <TextField
          className={classes.m1}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />
        <TextField
          className={classes.m1}
          id="outlined-basic"
          label="City, State"
          variant="outlined"
        />
        <TextField
          className={classes.m1}
          id="outlined-basic"
          label="Zoom/Skype ID"
          variant="outlined"
        />
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button className={classes.button} variant="contained">
          Update
        </Button>
      </form>
    </React.Fragment>
  );
}

import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
const backgroundImage =
  "https://images.unsplash.com/photo-1597667159084-a3a21b68dd57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1406&q=80";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundImage: `url(${backgroundImage})`,
    position: "absolute",
    top: "0",
    left: "0",
    minWidth: "100%",
    minHeight: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: "0.9"
  }
  //   grid: {
  //     position: "relative"
  //     // color: "white",
  //     // backgroundColor: "transparent",
  //     // minWidth: "100%",
  //     // minHeight: "100%"
  //   }
}));

export default function SearchForm() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={12} className={classes.grid}>
        <div display="flex">
          <Typography
            variant="h4"
            gutterBottom
            classesName={classes.typography}
          >
            Tell us what kind of date you fancy?
          </Typography>
        </div>
        <Grid item xs={12}>
          <TextField
            id="Indoor/Outdoor"
            name="Indoor/Outdoor"
            label="Indoor/Outdoor"
            autoComplete="Indoor/Outdoor"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Day/Night"
            name="Day/Night"
            label="Day/Night"
            autoComplete="Day/Night"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="price"
            name="price"
            label="Price"
            autoComplete="price"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Genre"
            name="Genre"
            label="Genre"
            autoComplete="Genre"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="Rating" name="Rating" label="Rating" />
        </Grid>
      </Grid>
    </div>
  );
}

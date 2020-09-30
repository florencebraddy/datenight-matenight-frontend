import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PopoverSearch from "./PopoverSearch";

const useStyles = makeStyles({
  container: {
    display: "flex",
    fontFamily: "Julius Sans One"
  },
  root: {
    maxWidth: "50%",
    maxHeight: "50%",
    margin: "1rem auto",
    textAlign: "center",
    borderRadius: "25px",
    justifyContent: "center",
    fontFamily: "Julius Sans One"
  },
  title: {
    fontFamily: "Julius Sans One",
    fontWeight: "bold",
    fontSize: "40px",
    color: "#69bdd2"
  },
  text: {
    fontFamily: "Julius Sans One",
    color: "black",
    fontSize: "20px"
  },
  media: {
    height: 100,
    width: 100
  },
  location: {
    fontFamily: "Julius Sans One",
    fontSize: "15px",
    fontWeight: "bold"
  }
});

export default function DateCards({ dates, toggle, setToggle }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {dates.name}
            </Typography>
            <Typography
              className={classes.text}
              variant="body2"
              color="textSecondary"
            >
              {dates.description}
            </Typography>
            <Typography
              className={classes.location}
              variant="body2"
              color="textSecondary"
            >
              {dates.activity_location}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.popover}>
          <PopoverSearch
            className={classes.Popover}
            toggle={toggle}
            setToggle={setToggle}
            dates={dates}
            size="small"
          ></PopoverSearch>
        </CardActions>
      </Card>
    </Container>
  );
}

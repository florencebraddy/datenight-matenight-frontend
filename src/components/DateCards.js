import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  container: {
    display: "flex"
  },
  root: {
    maxWidth: "50%",
    maxHeight: "50%",
    margin: "1rem auto",
    textAlign: "center",
    borderRadius: "25px",
    justifyContent: "center"
  },
  media: {
    height: 100,
    width: 100
  }
});

export default function DateCards({ el }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {el.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {el.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {el.activity_location}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {el.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

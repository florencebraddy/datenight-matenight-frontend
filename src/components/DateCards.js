import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 100,
    width: 100
  }
});

export default function DateCards({ el }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {el.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            THIS IS THE CARD
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
  );
}

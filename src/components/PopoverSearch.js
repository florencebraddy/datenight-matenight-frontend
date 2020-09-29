import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { textAlign } from "@material-ui/system";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(3),
    textAlign: "center"
  }
}));

export default function PopoverSearch({ dates, toggle, setToggle }) {
  console.log(dates);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const StyledRating = withStyles({
    iconFilled: {
      color: "#ff6d75"
    },
    iconHover: {
      color: "#ff3d47"
    }
  })(Rating);

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Learn More
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.typography}>
          {/* <b>Category:</b>
          {date.category} */}
          <br />
          <br />
          <b>Rating:</b>
          <StyledRating
            name="customized-color"
            defaultValue={5}
            getLabelText={value => `${value} Heart${value !== 1 ? "s" : ""}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
          />
          <br />
          <br />
          <b>Price:</b>
          {dates.price}
        </Typography>
      </Popover>
    </div>
  );
}

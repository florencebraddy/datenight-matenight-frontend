import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Input, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  nav: {
    backgroundColor: "#D3CFCE",
    color: "black"
  },
  title: {
    fontSize: "35px",
    fontFamily: "Neucha"
  }
}));
const SearchDatesNav = ({ toggle, setToggle, setQuery }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.nav}>
      <Toolbar>
        <Container className={classes.container}>
          <Input onChange={event => setQuery(event.target.value)}></Input>
          <Button
            onClick={() => setToggle(!toggle)}
            color="inherit"
            fontFamily="Neucha"
          >
            Search
          </Button>
          <Typography
            variant="h1"
            align="center"
            className={classes.title}
            noWrap={true}
          >
            Search for the perfect date
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default SearchDatesNav;

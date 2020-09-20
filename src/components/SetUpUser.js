import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouteLink } from "@reach/router";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//go back and fix camelcase etc

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SetUpUser({ signUp, setSignUp }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter Your Username and Password!
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={event =>
                  setSignUp({ ...signUp, username: event.target.value })
                }
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={signUp.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={event =>
                  setSignUp({ ...signUp, password: event.target.value })
                }
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={signUp.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={event =>
                  setSignUp({
                    ...signUp,
                    first_name: event.target.value
                  })
                }
                variant="outlined"
                required
                fullWidth
                name="First Name"
                label="First Name"
                type="First Name"
                id="First Name"
                autoComplete="First Name"
                value={signUp.first_name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={event =>
                  setSignUp({ ...signUp, last_name: event.target.value })
                }
                variant="outlined"
                required
                fullWidth
                name="Last Name"
                label="Last Name"
                type="Last Name"
                id="Last Name"
                autoComplete="Last Name"
                value={signUp.last_name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={event =>
                  setSignUp({ ...signUp, user_location: event.target.value })
                }
                variant="outlined"
                required
                fullWidth
                name="Location"
                label="Location"
                type="Location"
                id="location"
                autoComplete="location"
                value={signUp.user_location}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={event =>
                  setSignUp({ ...signUp, profile_picture: event.target.value })
                }
                variant="outlined"
                required
                fullWidth
                name="Profile Picture"
                label="Profile Picture"
                type="Profile Picture"
                id="Profile Picture"
                autoComplete="Profile Picture"
                value={signUp.profile_picture}
              />
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                <RouteLink to="/">Already have an account? Sign in</RouteLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

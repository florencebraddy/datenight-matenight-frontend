import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LogInUser from "./LogInUser";
import { Auth } from "aws-amplify";
import { navigate } from "@reach/router";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
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
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Create profile", "Confirm Profile"];
}
// function getStepContent(stepIndex, signUp, setSignUp) {
//   switch (stepIndex) {
//     case 0:
//       return <SetUpUser signUp={signUp} setSignUp={setSignUp} />;
//     case 1:
//       return <ConfirmSignUp signUp={signUp} setSignUp={setSignUp} />;
//     default:
//       return "Unknown stepIndex";
//   }
// }
export default function logIn() {
  const classes = useStyles();
  //   const [activeStep, setActiveStep] = React.useState(0);
  //   const steps = getSteps();
  const [logIn, setLogIn] = React.useState({
    username: "",
    password: ""
  });
  console.log(logIn);

  const [signUpUser, setSignUpUser] = React.useState(undefined);
  console.log("Logged In", signUpUser);

  //   function renderButton() {
  //     // if (activeStep === steps.length - 1) {
  //       return (
  //         <Button variant="contained" color="primary" onClick={handleConfirmUser}>
  //           Log In
  //         </Button>
  //       );
  //     } else {
  //       return (
  //         <Button variant="contained" color="primary" onClick={handleNext}>
  //           Next
  //         </Button>
  //       );
  //     }
  //   }
  const handleSignIn = () => {
    try {
      async function userSignIn() {
        const user = await Auth.signIn({
          username: signIn.username,
          password: signIn.password
          //   first_name: signUp.first_name,
          //   last_name: signUp.last_name,
          //   user_location: signUp.user_location,
          // profile_picture: signUp.profile_picture,
          //   attributes: {
          //     email: signUp.username
        });
        setSignUpUser(user);
      }
      userSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  async function handleLogIn() {
    async function getFromSql() {
      console.log("Get User Info");
      return await axios({
        method: "get",
        url: "http://localhost:4000/user",
        data: {
          username: signIn.username
          //   first_name: signUp.first_name,
          //   last_name: signUp.last_name,
          //   user_location: signUp.user_location
          // profile_picture: signUp.profile_picture
        },
        headers: { "Content-Type": "application/json" }
      });
    }
    try {
      const response = await Auth.signIn(signIn.username, signIn.password);
      // prompt(response);
      if (response === "SUCCESS") {
        getFromSql();
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={classes.paper}>
      <LogInUser signIn={signIn} setSignIn={setSignUp}></LogInUser>
      {/* <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
      {/* <div> */}
      {/* <div> */}
      {/* <Typography className={classes.instructions}>
            {/* {getStepContent(activeStep, signUp, setSignUp)}{" "} */}
      {/* </Typography> */}
      {/* <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
          </Button>
          {activeStep === steps.length - 2 ? ( */}
      <Button variant="contained" color="primary" onClick={handleSignIn}>
        Log In
      </Button>
      ) : ( renderButton() )}
      {/* </div>
      </div> */}
    </div>
  );
}

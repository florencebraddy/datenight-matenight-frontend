import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SetUpUser from "./SetUpUser";
import ConfirmSignUp from "./ConfirmSignUp";
import { Auth, Storage } from "aws-amplify";
import { navigate } from "@reach/router";
import axios from "axios";
import ProfilePic from "./ProfilePic";
import { v4 as uuid } from "uuid";

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
    backgroundColor: "black"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black"
  },
  backButton: {
    marginRight: theme.spacing(1),
    backgroundColor: "white"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Create profile", "Upload Profile Pic", "Confirm Profile"];
}
function getStepContent(stepIndex, signUp, setSignUp) {
  switch (stepIndex) {
    case 0:
      return <SetUpUser signUp={signUp} setSignUp={setSignUp} />;
    case 1:
      return <ProfilePic signUp={signUp} setSignUp={setSignUp}></ProfilePic>;
    case 2:
      return <ConfirmSignUp signUp={signUp} setSignUp={setSignUp} />;
    default:
      return "Unknown stepIndex";
  }
}
export default function SignUp() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [signUp, setSignUp] = React.useState({
    username: "",
    first_name: "",
    last_name: "",
    user_location: "",
    profile_picture: undefined,
    password: "",
    confirmationCode: ""
  });
  console.log(signUp);

  const [signUpUser, setSignUpUser] = React.useState(undefined);
  console.log("Signed Up ", signUpUser);

  function renderButton() {
    if (activeStep === steps.length - 1) {
      return (
        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleConfirmUser}
        >
          Confirm
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleNext}
        >
          Next
        </Button>
      );
    }
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleCreateUser = () => {
    try {
      async function cognitoSignUp() {
        console.log(signUp);
        const user = await Auth.signUp({
          username: signUp.username,
          password: signUp.password,
          first_name: signUp.first_name,
          last_name: signUp.last_name,
          user_location: signUp.user_location,
          attributes: {
            email: signUp.username
          }
        });
        setSignUpUser(user);
      }
      cognitoSignUp();
      handleNext();
    } catch (error) {
      console.log(error);
    }
  };

  async function handleConfirmUser() {
    async function uploadToSql(uuid) {
      console.log("upload to mysql");
      return await axios({
        method: "post",
        url: "http://localhost:4000/user",
        data: {
          username: signUp.username,
          first_name: signUp.first_name,
          last_name: signUp.last_name,
          user_location: signUp.user_location,
          profile_picture: uuid
        },
        headers: { "Content-Type": "application/json" }
      });
    }
    try {
      const response = await Auth.confirmSignUp(
        signUp.username,
        signUp.confirmationCode
      );
      if (response === "SUCCESS") {
        const userUuid = uuid();
        Storage.put(
          `${signUp.username}/profilepictures/${userUuid}.png`,
          signUp.profile_picture,
          {
            contentType: "image/png"
          }
        )
          .then(result => console.log(result))
          .then(() => uploadToSql(userUuid))
          .then(() => navigate("/profile"))
          .catch(err => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={classes.paper}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>
          <Typography className={classes.instructions}>
            {getStepContent(activeStep, signUp, setSignUp)}
          </Typography>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
          </Button>
          {activeStep === steps.length - 2 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateUser}
              className={classes.submit}
            >
              Create User
            </Button>
          ) : (
            renderButton()
          )}
        </div>
      </div>
    </div>
  );
}

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default withStyles(theme => ({
  root: {
    borderRadius: "10px",
    backgroundColor: "#D3D3D3",
    color: "black",
    padding: theme.spacing(2, 4)
  }
}))(Button);

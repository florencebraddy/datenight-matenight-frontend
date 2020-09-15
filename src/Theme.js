import { createMuiTheme } from "@material-ui/core/styles";
// import { green, grey, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e4ffff",
      main: "#b1ddd9",
      dark: "#81aba8"
    },
    secondary: {
      light: "#bfd4df",
      main: "#8fa3ad",
      dark: "#61747e"
    }
  }
});

export default theme;

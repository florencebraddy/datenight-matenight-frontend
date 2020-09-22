import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import Rating from "@material-ui/lab/Rating";

// Generate Order Data
function createData(name, date, price, rating) {
  return { name, date, price, rating };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  )
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  },
  table: {
    backgroundColor: "#687ca1",
    textAlign: "center"
  },

  cell: {
    fontFamily: "Barlow Condensed",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center"
  }
}));

export default function Reviews() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title className={classes.title}>Date Night Reviews</Title>
      <Table size="small">
        <TableHead className={classes.table}>
          <TableRow>
            <TableCell className={classes.cell}>Activity</TableCell>
            <TableCell className={classes.cell}>Date</TableCell>
            <TableCell className={classes.cell}>Comments</TableCell>
            <TableCell className={classes.cell}>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.comments}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>
                <Rating></Rating>
              </TableCell>{" "}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Reviews
        </Link>
      </div>
    </React.Fragment>
  );
}

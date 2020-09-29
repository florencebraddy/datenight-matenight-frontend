import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Button, Input } from "@material-ui/core";
import SearchDatesNav from "./SearchDatesNav";
import DateCards from "./DateCards";
import SearchForm from "./SearchForm";
import Container from "@material-ui/core/Container";
// import Popover from "./components/Popover";

const backgroundImage =
  "https://images.unsplash.com/photo-1597667159084-a3a21b68dd57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1406&q=80";

// const useStyles = makeStyles(theme => ({
//   container: {
//     backgroundImage: `url(${backgroundImage})`,
//     position: "absolute",
//     top: "0",
//     left: "0",
//     minWidth: "100%",
//     minHeight: "100%",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     opacity: "0.9"
//   }
// }));

// function SearchDatesOnLoad() {
//   const [load, setLoad] = userState([]);
//   useEffect(() => {
//     async function getData() {
//       const response = await axios.get(
//         `http://localhost:4000/search/activity?name=${query}&price=${query}&location=${query}`
//       );
//       console.log(response);
//       setDates(response.data.message);
//       // console.log(response.data);
//     }
//     getData();
//   });

function SearchDates() {
  const [dates, setDates] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://localhost:4000/search/activity?name=${query}&price=${query}&location=${query}`
      );
      setDates(response.data.message);
      console.log(response.data.message);
    }
    getData();
  }, [toggle]);
  return (
    <div>
      <div
        style={{ backgroundImage: `url("${backgroundImage}")` }}
        margin="0 auto"
        // padding="0"
        // minHeight="100px"
        // minheight="100px"
      >
        <SearchDatesNav
          toggle={toggle}
          setToggle={setToggle}
          setQuery={setQuery}
          position="relative"
        />
        {/* <SearchForm></SearchForm> */}
        <div>
          {dates &&
            dates.map(dates => (
              <>
                <DateCards key={dates.name} dates={dates}></DateCards>
              </>
            ))}
        </div>
        <br />
      </div>
    </div>
  );
}

export default SearchDates;

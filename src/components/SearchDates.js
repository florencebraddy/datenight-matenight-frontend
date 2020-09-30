import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchDatesNav from "./SearchDatesNav";
import DateCards from "./DateCards";
import SearchForm from "./SearchForm";

const backgroundImage =
  "https://images.unsplash.com/photo-1597667159084-a3a21b68dd57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1406&q=80";

function SearchDates() {
  const [dates, setDates] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState(["Outdoors"]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://localhost:4000/search/activity?name=${query}&price=${query}&location=${query}&category=${query}`
      );
      setDates(response.data.message);
      console.log(response.data.message);
    }
    getData();
  }, [toggle]);
  return (
    <div
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        minHeight: "100vh",
        backgroundRepeat: "no-repeat, center center",
        backgroundSize: "cover"
      }}
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
  );
}

export default SearchDates;

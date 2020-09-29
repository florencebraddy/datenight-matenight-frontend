import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Button, Input } from "@material-ui/core";
import SearchDatesNav from "./SearchDatesNav";
import DateCards from "./DateCards";
import SearchForm from "./SearchForm";
// import Popover from "./components/Popover";

function SearchDates() {
  const [dates, setDates] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://localhost:4000/search/activity?name=${query}`
      );
      console.log(response);
      setDates(response.data.message);
      // console.log(response.data);
    }
    getData();
  }, [toggle]);
  return (
    <div className="search">
      <header className="Search">
        <SearchDatesNav
          toggle={toggle}
          setToggle={setToggle}
          setQuery={setQuery}
        />
        <SearchForm></SearchForm>
        <div>
          {dates &&
            dates.map(el => (
              <>
                <DateCards key={el.name} el={el}></DateCards>
              </>
            ))}
        </div>
        <br />
      </header>
    </div>
  );
}

export default SearchDates;

import React, { Dispatch, FormEvent, SetStateAction } from "react";
import SearchBoxStyles from "./SearchBoxStyles";

export interface SearchProps {
  handleCitySubmit: (event: FormEvent) => void;
  cityName: string;
  setCityName: Dispatch<SetStateAction<string>>;
}

function SearchBox(props: SearchProps) {
  const { handleCitySubmit, cityName, setCityName } = props;

  return (
    <div className="card flex-grow-1">
      <SearchBoxStyles>
        <form onSubmit={handleCitySubmit} autoComplete="off">
          <h1>Weather in your city</h1>
          <label>
            City
            <input
              type="text"
              placeholder="Enter a city e.g: Melbourne"
              name="cityName"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
          </label>
          <button>Search</button>
        </form>
      </SearchBoxStyles>
    </div>
  );
}

export default SearchBox;

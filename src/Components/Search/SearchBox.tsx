import React, { Dispatch, FormEvent, SetStateAction } from "react";
import SearchBoxStyles from "./SearchBoxStyles";

export interface SearchProps {
  handleCitySubmit: (event: FormEvent) => void;
  cityName: string;
  setCityName: Dispatch<SetStateAction<string>>;
}

/**
 * A component that displays a search form for entering a city name.
 * When the form is submitted, the weather data for the specified city is displayed.
 *
 * @param {SearchProps} props - The props for the component.
 * @param {function} props.handleCitySubmit - A callback function that is called when the form is submitted.
 * @param {string} props.cityName - The name of the city to search for.
 * @param {function} props.setCityName - A function that updates the city name.
 */
function SearchBox(props: SearchProps) {
  const { handleCitySubmit, cityName, setCityName } = props;

  return (
    <div className="card flex-grow-1">
      <SearchBoxStyles>
        <form
          onSubmit={handleCitySubmit}
          autoComplete="off"
          data-testid="city-form"
        >
          <h1>Weather in your city</h1>
          <label>
            Enter a city name:
            <input
              type="text"
              placeholder="Melbourne"
              name="cityName"
              data-testid="city-input"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
          </label>
          <button data-testid="search-button">Search</button>
        </form>
      </SearchBoxStyles>
    </div>
  );
}

export default SearchBox;

import React, { FormEvent, SetStateAction } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  it("renders a form with a city input and search button", () => {
    const handleCitySubmit = (_event: FormEvent) => {};
    const cityName = "";
    const setCityName = (_newCityName: SetStateAction<string>) => {};

    render(
      <SearchBox
        handleCitySubmit={handleCitySubmit}
        cityName={cityName}
        setCityName={setCityName}
      />
    );
    const form = screen.getByTestId("city-form");
    const input = screen.getByTestId("city-input");
    const button = screen.getByTestId("search-button");
    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("calls the handleCitySubmit prop when the form is submitted", () => {
    const handleCitySubmit = jest.fn();
    const cityName = "";
    const setCityName = (_newCityName: SetStateAction<string>) => {};

    render(
      <SearchBox
        handleCitySubmit={handleCitySubmit}
        cityName={cityName}
        setCityName={setCityName}
      />
    );
    const form = screen.getByTestId("city-form");
    fireEvent.submit(form);
    expect(handleCitySubmit).toHaveBeenCalled();
  });

  it("updates the city name when the input value changes", () => {
    const handleCitySubmit = (_event: FormEvent) => {};
    const cityName = "";
    const setCityName = jest.fn();

    render(
      <SearchBox
        handleCitySubmit={handleCitySubmit}
        cityName={cityName}
        setCityName={setCityName}
      />
    );
    const input = screen.getByTestId("city-input");
    fireEvent.change(input, { target: { value: "Melbourne" } });
    expect(setCityName).toHaveBeenCalledWith("Melbourne");
  });
});

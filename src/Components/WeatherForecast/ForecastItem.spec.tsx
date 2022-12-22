import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastItem from "./ForecastItem";
import { Weather } from "../../types/WeatherTypes";

describe("ForecastItem", () => {
  const weatherData = getMockWeatherData();

  it("should render the correct day of the week", () => {
    render(<ForecastItem weatherData={weatherData} />);
    expect(screen.getByText("Thursday")).toBeInTheDocument();
  });

  it("should render the correct temperature", () => {
    render(<ForecastItem weatherData={weatherData} />);
    expect(screen.getByTestId("temp")).toBeInTheDocument();
    expect(screen.getByTestId("temp")).toHaveTextContent("15°C");
  });

  it("should render the correct feels like temperature", () => {
    render(<ForecastItem weatherData={weatherData} />);
    expect(screen.getByTestId("feels-like")).toBeInTheDocument();
    expect(screen.getByTestId("feels-like")).toHaveTextContent(
      "Feels like 17°C"
    );
  });

  it("should render the correct weather icon", () => {
    render(<ForecastItem weatherData={weatherData} />);
    expect(screen.getByAltText("weather icon")).toBeInTheDocument();
  });

  it("should render the correct weather description", () => {
    render(<ForecastItem weatherData={weatherData} />);
    expect(screen.getByText("Clear")).toBeInTheDocument();
  });

  it("should render the correct humidity", () => {
    render(<ForecastItem weatherData={weatherData} />);
    expect(screen.getByText("Humidity: 77%")).toBeInTheDocument();
  });

  it("should render the correct wind speed", () => {
    render(<ForecastItem weatherData={weatherData} />);
    expect(screen.getByText("Wind: 4.1 m/s")).toBeInTheDocument();
  });
});

function getMockWeatherData(): Weather {
  return {
    weather: [
      {
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    main: {
      temp: 15,
      feels_like: 17,
      temp_min: 288.15,
      temp_max: 288.15,
      pressure: 1013,
      humidity: 77,
    },
    name: "London",
    sys: {
      country: "GB",
    },
    wind: {
      speed: 4.1,
    },
    dt: 1606988000,
  };
}

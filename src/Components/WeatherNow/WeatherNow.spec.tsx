import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WeatherNow from "./WeatherNow";
import { Weather } from "../../types/WeatherTypes";

describe("WeatherNow", () => {
  it("should render the component with weather data", () => {
    const weatherData = getMockWeatherData();

    render(<WeatherNow weatherData={weatherData} />);

    // check if the city name and country are displayed
    expect(screen.getByText("London, GB")).toBeInTheDocument();
    // check if the main weather description is displayed
    expect(screen.getByText("Clouds")).toBeInTheDocument();
    // check if the temperature is displayed
    expect(screen.getByTestId("current-weather")).toHaveTextContent("8°C");
    // check if the "feels like" temperature is displayed
    expect(screen.getByText("Feels like 9°C")).toBeInTheDocument();
    // check if the humidity is displayed
    expect(screen.getByText("Humidity: 93%")).toBeInTheDocument();
    // check if the wind speed is displayed
    expect(screen.getByText("Wind: 4.1 m/s")).toBeInTheDocument();
    // check if the pressure is displayed
    expect(screen.getByText("Pressure: 1012 hPa")).toBeInTheDocument();
  });
});

function getMockWeatherData(): Weather {
  return {
    weather: [
      {
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d",
      },
    ],
    main: {
      temp: 8,
      feels_like: 9,
      temp_min: 7,
      temp_max: 11,
      pressure: 1012,
      humidity: 93,
    },
    name: "London",
    sys: {
      country: "GB",
    },
    wind: {
      speed: 4.1,
    },
    dt: 1485789600,
  };
}

import { render, screen } from "@testing-library/react";
import { Forecast } from "../../types/WeatherTypes";
import WeatherForecast from "./WeatherForecast";

describe("WeatherForecast", () => {
  it("should render a forecast heading", () => {
    render(<WeatherForecast />);
    expect(screen.getByTestId("forecast")).toHaveTextContent("5 Day Forecast");
  });

  it("should render a ForecastItem for each item in the forecast data", () => {
    const forecast = getMockForecastData();

    render(<WeatherForecast forecastData={forecast} />);
    expect(screen.getAllByTestId("forecastItem")).toHaveLength(2);
  });

  it("should not render any ForecastItems if forecast data is not provided", () => {
    render(<WeatherForecast />);
    expect(screen.queryAllByTestId("forecastItem")).toHaveLength(0);
  });
});

function getMockForecastData(): Forecast {
  return {
    list: [
      {
        weather: [
          {
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        main: {
          temp: 288.15,
          feels_like: 287.57,
          temp_min: 288.15,
          temp_max: 288.15,
          pressure: 1013,
          humidity: 43,
        },
        name: "London",
        sys: {
          country: "GB",
        },
        wind: {
          speed: 5.1,
        },
        dt: 1613354400,
      },
      {
        weather: [
          {
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        main: {
          temp: 288.54,
          feels_like: 287.86,
          temp_min: 288.54,
          temp_max: 288.54,
          pressure: 1012,
          humidity: 45,
        },
        name: "London",
        sys: {
          country: "GB",
        },
        wind: {
          speed: 4.6,
        },
        dt: 1613444400,
      },
      {
        weather: [
          {
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        main: {
          temp: 288.54,
          feels_like: 287.86,
          temp_min: 288.54,
          temp_max: 288.54,
          pressure: 1012,
          humidity: 45,
        },
        name: "London",
        sys: {
          country: "GB",
        },
        wind: {
          speed: 4.6,
        },
        dt: 1671807600,
      },
      {
        weather: [
          {
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        main: {
          temp: 288.54,
          feels_like: 287.86,
          temp_min: 288.54,
          temp_max: 288.54,
          pressure: 1012,
          humidity: 45,
        },
        name: "London",
        sys: {
          country: "GB",
        },
        wind: {
          speed: 4.6,
        },
        dt: 1671861600,
      },
      {
        weather: [
          {
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        main: {
          temp: 288.54,
          feels_like: 287.86,
          temp_min: 288.54,
          temp_max: 288.54,
          pressure: 1012,
          humidity: 45,
        },
        name: "London",
        sys: {
          country: "GB",
        },
        wind: {
          speed: 4.6,
        },
        dt: 1671861600,
      },
      {
        weather: [
          {
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        main: {
          temp: 288.54,
          feels_like: 287.86,
          temp_min: 288.54,
          temp_max: 288.54,
          pressure: 1012,
          humidity: 45,
        },
        name: "London",
        sys: {
          country: "GB",
        },
        wind: {
          speed: 4.6,
        },
        dt: 1671861600,
      },
      {
        weather: [
          {
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        main: {
          temp: 288.54,
          feels_like: 287.86,
          temp_min: 288.54,
          temp_max: 288.54,
          pressure: 1012,
          humidity: 45,
        },
        name: "London",
        sys: {
          country: "GB",
        },
        wind: {
          speed: 4.6,
        },
        dt: 1671861600,
      },
      {
        weather: [
          {
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        main: {
          temp: 288.54,
          feels_like: 287.86,
          temp_min: 288.54,
          temp_max: 288.54,
          pressure: 1012,
          humidity: 45,
        },
        name: "London",
        sys: {
          country: "GB",
        },
        wind: {
          speed: 4.6,
        },
        dt: 1671861600,
      },
      {
        weather: [
          {
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        main: {
          temp: 288.54,
          feels_like: 287.86,
          temp_min: 288.54,
          temp_max: 288.54,
          pressure: 1012,
          humidity: 45,
        },
        name: "London",
        sys: {
          country: "GB",
        },
        wind: {
          speed: 4.6,
        },
        dt: 1671861600,
      },
    ],
  };
}

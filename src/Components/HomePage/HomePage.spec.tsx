import axios from "axios";
import HomePage from "./HomePage";
import { render, fireEvent, screen } from "@testing-library/react";
import { Forecast, Weather } from "../../types/WeatherTypes";

jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({}),
}));

describe("HomePage", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should set weatherData and forecastData when handleCitySubmit is called", async () => {
    // Arrange
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockWeatherData });
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockForecastData });

    // Act
    render(<HomePage />);
    const cityInput = screen.getByTestId("city-input");
    const form = screen.getByTestId("city-form");
    fireEvent.change(cityInput, { target: { value: "New York" } });
    fireEvent.submit(form);
    await screen.findByTestId("current-weather");

    // Assert
    expect(screen.getByText("Current weather")).toBeInTheDocument();
    expect(screen.getByText("5 Day Forecast")).toBeInTheDocument();
  });
});

// Mock data for the api calls
const mockWeatherData: Weather = {
  weather: [
    {
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  main: {
    temp: 28,
    feels_like: 27,
    temp_min: 26,
    temp_max: 30,
    pressure: 1013,
    humidity: 41,
  },
  name: "New York",
  sys: {
    country: "US",
  },
  wind: {
    speed: 5.7,
  },
  dt: 1623098800,
};

const mockForecastData: Forecast = {
  list: [
    {
      weather: [
        {
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      main: {
        temp: 28,
        feels_like: 27,
        temp_min: 26,
        temp_max: 30,
        pressure: 1013,
        humidity: 41,
      },
      name: "New York",
      sys: {
        country: "US",
      },
      wind: {
        speed: 5.7,
      },
      dt: 1623098800,
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
        temp: 29,
        feels_like: 28,
        temp_min: 27,
        temp_max: 31,
        pressure: 1013,
        humidity: 40,
      },
      name: "New York",
      sys: {
        country: "US",
      },
      wind: {
        speed: 5.7,
      },
      dt: 1623185200,
    },
    {
      weather: [
        {
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      main: {
        temp: 28,
        feels_like: 27,
        temp_min: 26,
        temp_max: 30,
        pressure: 1013,
        humidity: 41,
      },
      name: "New York",
      sys: {
        country: "US",
      },
      wind: {
        speed: 5.7,
      },
      dt: 1623271600,
    },
  ],
};

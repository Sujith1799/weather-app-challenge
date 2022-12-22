import axios from "axios";
import { getWeather, getForecast } from "./WeatherAPI";
import { toast } from "react-toastify";

// Mock the api
jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({}),
}));

// Mock the toast component
jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe("weather", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getWeather", () => {
    it("should make a GET request to the correct URL and return the data", async () => {
      // Set up the mocked axios response
      const mockData = {};
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

      // Call the function
      const location = "New York";
      const data = await getWeather(location);

      // Assert that the correct URL was called and the correct data was returned
      expect(axios.get).toHaveBeenCalledWith(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      expect(data).toEqual(mockData);
    });

    it("should show an error toast if the request fails", async () => {
      // Set up the mocked axios response
      (axios.get as jest.Mock).mockRejectedValue(new Error("Request failed"));
      const spy = jest.spyOn(console, "error").mockImplementation(() => {});
      // Call the function
      const location = "New York";
      await getWeather(location);

      // Assert that the toast.error function was called
      expect(toast.error).toHaveBeenCalled();
      // Assert that the console.error function was called
      expect(spy).toHaveBeenCalledWith(new Error("Request failed"));
    });
  });

  describe("getForecast", () => {
    it("should make a GET request to the correct URL and return the data", async () => {
      // Set up the mocked axios response
      const mockData = {};
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

      // Call the function
      const location = "New York";
      const data = await getForecast(location);

      // Assert that the correct URL was called and the correct data was returned
      expect(axios.get).toHaveBeenCalledWith(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      expect(data).toEqual(mockData);
    });

    it("should log an error to the console if the request fails", async () => {
      // Set up the mocked axios response
      (axios.get as jest.Mock).mockRejectedValue(new Error("Request failed"));

      // Spy on the console.error function
      const spy = jest.spyOn(console, "error").mockImplementation(() => {});

      // Call the function
      const location = "New York";
      await getForecast(location);

      // Assert that the console.error function was called
      expect(spy).toHaveBeenCalledWith(new Error("Request failed"));
    });
  });
});

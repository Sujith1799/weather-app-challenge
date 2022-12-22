import axios from "axios";
import { toast } from "react-toastify";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

/**
 * Makes a GET request to the OpenWeatherMap API to retrieve the current weather data for a given location.
 * @param {string} location - The name of the location for which to retrieve weather data.
 * @returns {Promise} - A promise that resolves with the weather data from the API response.
 * @throws {Error} - If the request fails or the location is not found, an error message is displayed using `react-toastify` and the error is logged to the console.
 */
export const getWeather = async (location: string) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    );
    return res.data;
  } catch (error) {
    toast.error("Sorry, we couldn't find weather data for this city");
    console.error(error);
  }
};

/**
 * Makes a GET request to the OpenWeatherMap API to retrieve the forecast data for a given location.
 * @param {string} location - The name of the location for which to retrieve forecast data.
 * @returns {Promise} - A promise that resolves with the forecast data from the API response.
 * @throws {Error} - If the request fails, the error is logged to the console.
 */
export const getForecast = async (location: string) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

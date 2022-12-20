import axios from "axios";
import { toast } from "react-toastify";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

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

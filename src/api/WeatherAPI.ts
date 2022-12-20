import axios from "axios";

const API_KEY = "9a8042f7701a0bb183151a49673192b8";

export const getWeather = async (location: string) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    );
    return res.data;
  } catch (error) {
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

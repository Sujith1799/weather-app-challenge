import { Forecast } from "../types/WeatherTypes";

export const formatTemperature = (temp?: number): number | undefined => {
  return temp && Math.round(temp);
};

export const getDayOfWeek = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
};

export const getDailyForecast = (forecast: Forecast): Forecast => {
  return forecast.list.reduce(
    (dailyForecast: Forecast, forecastData, index) => {
      if (index % 8 === 0) {
        dailyForecast.list.push(forecastData);
      }
      return dailyForecast;
    },
    { list: [] }
  );
};

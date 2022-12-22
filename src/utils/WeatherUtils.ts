import { Forecast } from "../types/WeatherTypes";

/**
 * Formats a temperature by rounding it to the nearest integer.
 * @param {number} [temp] - The temperature to format. If not provided, returns `undefined`.
 * @returns {number|undefined} - The formatted temperature, or `undefined` if no temperature was provided.
 */
export const formatTemperature = (temp?: number): number | undefined => {
  return temp && Math.round(temp);
};

/**
 * Gets the day of the week for a given timestamp.
 * @param {number} timestamp - The timestamp for which to get the day of the week.
 * @returns {string} - The day of the week, formatted in long form (e.g. "Monday").
 */
export const getDayOfWeek = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
};

/**
 * Filters a forecast object to only include the daily forecast data (i.e. every 8th forecast).
 * @param {Forecast} forecast - The forecast object to filter.
 * @returns {Forecast} - A filtered forecast object containing only the daily forecast data.
 */
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

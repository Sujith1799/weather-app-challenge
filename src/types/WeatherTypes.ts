/**
 * The weather data for a single location at a given time.
 * This data is retrieved from the OpenWeatherMap API.
 *
 */
export interface Weather {
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string;
  };
  wind: {
    speed: number;
  };
  dt: number;
}

/**
 * The weather forecast data for a single location.
 * This data is retrieved from the OpenWeatherMap API.
 */
export interface Forecast {
  list: Weather[];
}

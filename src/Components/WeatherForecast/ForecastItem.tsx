import React from "react";
import { Weather } from "../../types/WeatherTypes";
import { formatTemperature, getDayOfWeek } from "../../utils/WeatherUtils";
import ForecastItemStyles from "./ForecastItemStyles";

export interface ForecastItemProps {
  weatherData: Weather;
}

function ForecastItem(props: ForecastItemProps) {
  const { weatherData } = props;

  return (
    <ForecastItemStyles>
      <h2>{getDayOfWeek(weatherData.dt)}</h2>
      <div className="temp">
        {formatTemperature(weatherData?.main.temp)}
        <span className="degrees">°C</span>
      </div>
      <img
        alt="weather icon"
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
      />
      <div className="description">{weatherData.weather[0].main}</div>
      <div className="info">
        <div>Feels like {formatTemperature(weatherData.main.feels_like)}°C</div>
        <div>Humidity: {weatherData?.main.humidity}%</div>
        <div>Wind: {weatherData?.wind.speed} m/s</div>
      </div>
    </ForecastItemStyles>
  );
}

export default ForecastItem;

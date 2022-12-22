import React from "react";
import { Weather } from "../../types/WeatherTypes";
import WeatherNowStyles from "./WeatherNowStyles";
import { formatTemperature } from "../../utils/WeatherUtils";

export interface WeatherNowProps {
  weatherData?: Weather;
}

function WeatherNow(props: WeatherNowProps) {
  const { weatherData } = props;

  return (
    <div className="card">
      <WeatherNowStyles>
        <h1>Current weather</h1>
        <div className="content">
          <div className="main-info">
            <div className="city">
              {weatherData?.name}, {weatherData?.sys.country}
            </div>
            <div className="description">{weatherData?.weather[0].main}</div>
            <div className="temp" data-testid="current-weather">
              {formatTemperature(weatherData?.main.temp)}
              <span className="degrees">°C</span>
            </div>
            <div className="feels-like">
              Feels like {formatTemperature(weatherData?.main.feels_like)}°C
            </div>
          </div>
          <div className="secondary-info">
            <img
              className="weather-icon"
              alt="weather icon"
              src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
            />
            <div>Humidity: {weatherData?.main.humidity}%</div>
            <div>Wind: {weatherData?.wind.speed} m/s</div>
            <div>Pressure: {weatherData?.main.pressure} hPa</div>
          </div>
        </div>
      </WeatherNowStyles>
    </div>
  );
}

export default WeatherNow;

import React from "react";
import { Forecast } from "../../types/WeatherTypes";
import { getDailyForecast } from "../../utils/WeatherUtils";
import WeatherForecastStyles from "./WeatherForecastStyles";
import ForecastItem from "./ForecastItem";
import { Weather } from "../../types/WeatherTypes";

export interface WeatherForecastProps {
  forecastData?: Forecast;
}

function WeatherForecast(props: WeatherForecastProps) {
  const { forecastData } = props;

  return (
    <div className="card flex-grow-1">
      <WeatherForecastStyles>
        <h1 data-testid="forecast">5 Day Forecast</h1>
        <div className="content">
          {forecastData &&
            getDailyForecast(forecastData).list.map(
              (item: Weather, index: number) => (
                <ForecastItem key={index} weatherData={item} />
              )
            )}
        </div>
      </WeatherForecastStyles>
    </div>
  );
}

export default WeatherForecast;

import React, { FormEvent, useState } from "react";
import HomePageStyles from "./HomePageStyles";
import SearchBox from "../Search/SearchBox";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import WeatherNow from "../WeatherNow/WeatherNow";
import { getForecast, getWeather } from "../../api/WeatherAPI";
import { Forecast, Weather } from "../../types/WeatherTypes";

function HomePage() {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Weather>();
  const [forecastData, setForecastData] = useState<Forecast>();

  const handleCitySubmit = async (event: FormEvent) => {
    event.preventDefault();
    setWeatherData(await getWeather(cityName));
    setForecastData(await getForecast(cityName));
  };

  return (
    <HomePageStyles>
      <div className="row">
        <SearchBox
          handleCitySubmit={handleCitySubmit}
          cityName={cityName}
          setCityName={setCityName}
        />
        {weatherData && <WeatherNow weatherData={weatherData} />}
        {forecastData && <WeatherForecast forecastData={forecastData} />}
      </div>
    </HomePageStyles>
  );
}

export default HomePage;

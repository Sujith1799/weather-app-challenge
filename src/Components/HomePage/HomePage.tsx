import React, { FormEvent, useState } from "react";
import HomePageStyles from "./HomePageStyles";
import SearchBox from "../Search/SearchBox";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import WeatherNow from "../WeatherNow/WeatherNow";
import { getForecast, getWeather } from "../../api/WeatherAPI";
import { Forecast, Weather } from "../../types/WeatherTypes";

// const weatherData = {
//   weather: [
//     { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" },
//   ],
//   main: {
//     temp: 275.39,
//     feels_like: 275.39,
//     temp_min: 273.29,
//     temp_max: 279.43,
//     pressure: 1031,
//     humidity: 93,
//     sea_level: 1031,
//     grnd_level: 941,
//   },
//   visibility: 10000,
//   wind: { speed: 0.93, deg: 196, gust: 0.92 },
//   clouds: { all: 100 },
//   dt: 1671499727,
//   sys: {
//     type: 2,
//     id: 2075663,
//     country: "IT",
//     sunrise: 1671518891,
//     sunset: 1671550732,
//   },
//   timezone: 3600,
//   id: 3163858,
//   name: "Zocca",
//   cod: 200,
// };

// const forecastData = {
//   list: [
//     {
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       main: {
//         temp: 275.39,
//         feels_like: 275.39,
//         temp_min: 273.29,
//         temp_max: 279.43,
//         pressure: 1031,
//         humidity: 93,
//         sea_level: 1031,
//         grnd_level: 941,
//       },
//       visibility: 10000,
//       wind: { speed: 0.93, deg: 196, gust: 0.92 },
//       clouds: { all: 100 },
//       dt: 1671499727,
//       sys: {
//         type: 2,
//         id: 2075663,
//         country: "IT",
//         sunrise: 1671518891,
//         sunset: 1671550732,
//       },
//       timezone: 3600,
//       id: 3163858,
//       name: "Zocca",
//       cod: 200,
//     },
//     {
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       main: {
//         temp: 275.39,
//         feels_like: 275.39,
//         temp_min: 273.29,
//         temp_max: 279.43,
//         pressure: 1031,
//         humidity: 93,
//         sea_level: 1031,
//         grnd_level: 941,
//       },
//       visibility: 10000,
//       wind: { speed: 0.93, deg: 196, gust: 0.92 },
//       clouds: { all: 100 },
//       dt: 1671499727,
//       sys: {
//         type: 2,
//         id: 2075663,
//         country: "IT",
//         sunrise: 1671518891,
//         sunset: 1671550732,
//       },
//       timezone: 3600,
//       id: 3163858,
//       name: "Zocca",
//       cod: 200,
//     },
//   ],
// };

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
      <div className="footer">Your friendly neighborhood weather app</div>
    </HomePageStyles>
  );
}

export default HomePage;

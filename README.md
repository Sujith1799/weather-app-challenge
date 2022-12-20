# Weather App

This is a weather application that allows you to enter a city name and get the current weather and forecast for the next 5 days. It is built with [Create React App](https://github.com/facebook/create-react-app), [TypeScript](https://www.typescriptlang.org/), [Styled Components](https://styled-components.com/), and [Axios](https://github.com/axios/axios).

## How it looks like

![mm3](https://user-images.githubusercontent.com/32943856/208661571-02a81bfe-4f4d-4b39-b874-d98edb71d9c5.gif)

## Prerequisites

To run this app, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)) installed on your machine.

## Getting Started

1. Clone this repository:

```
git clone https://github.com/Sujith1799/weather-app-challenge
```

2. Navigate to the project directory:

```
cd weather-app
```

3. Install the dependencies:

```
npm install
```

4. Create an account and obtain an API key from [OpenWeather](https://openweather.com/). You can sign up for a free account and use the [Current Weather Data](https://openweather.com/api/weather) and [5 Day / 3 Hour Forecast](https://openweather.com/api/forecast) APIs.

5. Create a file named `.env` in the root of the project, and add the following line, replacing `[YOUR_API_KEY]` with your actual API key:

```
REACT_APP_WEATHER_API_KEY=[YOUR_API_KEY]
```

6. Start the development server:

```
npm start
```

The app will be served at [http://localhost:3000](http://localhost:3000).

## Additional features that could be implemented

1. **Geolocation-based weather:** Allow the user to see the current weather and forecast for their current location, rather than requiring them to enter a city name. This could be implemented using the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

2. **Search history:** Keep a record of the user's previous searches and allow them to easily access these cities again in the future. This could be implemented using a database or by storing the search history in the user's browser using [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

3. **Hourly forecast:** In addition to the 5-day forecast, provide an hourly forecast with chart representation for the current day. This could be implemented using the [Hourly Forecast](https://openweather.com/api/hourly-forecast) API from OpenWeather.

4. **Dark mode:** Add a toggle for a dark mode theme, which could be implemented using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).


## Building and Deploying

To build the app for production, run:

```
npm run build
```

This will create a `build` directory with the compiled production code. You can then serve the app with a static file server or deploy it to a hosting platform such as [Vercel](https://vercel.com/).

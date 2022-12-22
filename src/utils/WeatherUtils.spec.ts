import {
  formatTemperature,
  getDayOfWeek,
  getDailyForecast,
} from "./WeatherUtils";

describe("formatTemperature", () => {
  it("should return the rounded temperature if it is provided", () => {
    expect(formatTemperature(75.3)).toBe(75);
    expect(formatTemperature(30.7)).toBe(31);
  });

  it("should return undefined if no temperature is provided", () => {
    expect(formatTemperature()).toBeUndefined();
  });
});

describe("getDayOfWeek", () => {
  it("should return the day of the week for the given timestamp", () => {
    expect(getDayOfWeek(1609459200)).toEqual("Friday");
    expect(getDayOfWeek(1609545600)).toEqual("Saturday");
  });
});

describe("getDailyForecast", () => {
  it("should return a forecast with only the daily weather data", () => {
    const forecast = {
      list: [
        { dt: 1623472000, temp: { max: 75, min: 60 } },
        { dt: 1623472000, temp: { max: 85, min: 70 } },
        { dt: 1623472000, temp: { max: 95, min: 80 } },
        { dt: 1623558400, temp: { max: 75, min: 60 } },
        { dt: 1623558400, temp: { max: 85, min: 70 } },
        { dt: 1623558400, temp: { max: 95, min: 80 } },
      ],
    } as any;
    const expectedResult = {
      list: [{ dt: 1623472000, temp: { max: 75, min: 60 } }],
    };
    expect(getDailyForecast(forecast)).toEqual(expectedResult);
  });
});

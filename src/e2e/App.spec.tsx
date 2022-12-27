import * as playwright from "playwright";
import * as assert from "assert";

const PAGE_URL = "https://weather-app-challenge-dun.vercel.app/";

describe("Homepage", () => {
  it("should render the homepage and the heading", async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(PAGE_URL, { timeout: 10000 });

    await page.waitForSelector("h1");
    const heading = await page.$eval("h1", (el) => el.innerText);
    assert.strictEqual(heading, "Weather in your city");

    await browser.close();
  });

  it("should fill the input and get the weather data", async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(PAGE_URL, { timeout: 10000 });

    // Enter "Sydney" in the city input field and submit the form
    await page.fill('input[name="cityName"]', "Sydney");
    await page.click('button[data-testid="search-button"]');

    // Wait for the weatherNow element to appear
    await page.waitForSelector('div[data-testid="weatherNow"]', {
      timeout: 3000,
    });

    // Check that the current weather data is displayed
    const weatherNow = await page.$eval(
      'div[data-testid="weatherNow"]',
      (el) => el.innerHTML
    );
    expect(weatherNow).toContain("Current weather"); // heading
    expect(weatherNow).toContain("Sydney");
    expect(weatherNow).toContain("Feels like");
    expect(weatherNow).toContain("°C");

    await browser.close();
  });

  it("should fill the input and get the forecast data", async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(PAGE_URL, { timeout: 10000 });

    // Enter "Sydney" in the city input field and submit the form
    await page.fill('input[name="cityName"]', "Sydney");
    await page.click('button[data-testid="search-button"]');

    // Wait for the weatherNow element to appear
    await page.waitForSelector('div[data-testid="weather-forecast"]', {
      timeout: 3000,
    });

    // Check that the forecast data is displayed
    const forecast = await page.$eval(
      'div[data-testid="weather-forecast"]',
      (el) => el.innerHTML
    );
    expect(forecast).toContain("5 Day Forecast");

    // Check that 5 day forecast items are displayed
    const forecastItems = await page.$$eval(
      'div[data-testid="forecastItem"]',
      (els) => els.map((el) => el.innerHTML)
    );

    expect(forecastItems).toHaveLength(5);
    expect(forecastItems[0]).toContain("Feels like");
    expect(forecastItems[0]).toContain("°C");

    await browser.close();
  });
});

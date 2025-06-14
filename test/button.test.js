const puppeteer = require("puppeteer");

describe("Button Click Test", () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:8080");
  });

  afterAll(async () => {
    await browser.close();
  });

  it("should display text when button is clicked", async () => {
    await page.click("button");
    await page.waitForSelector("#output");
    const text = await page.$eval("#output", el => el.innerText);
    expect(text).toBe("Hello from CircleCI!");
  });
});

## Template for new puppeteer e2e tests

```js
import faker from "faker";
import puppeteer from "puppeteer";

describe("Contact form", () => {
  let page;
  let browser;
  const APP = "https://localhost:5000/";
  const width = 1920;
  const height = 1080;
  const lead = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    message: faker.random.words()
  };
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });
  afterAll(() => {
    browser.close();
  });

  test(
    "lead can submit a contact request",
    async () => {
      await page.goto(APP);
      await page.waitForSelector("[data-test=contact-form]");
      await page.click("input[name=name]");
      await page.type("input[name=name]", lead.name);
      await page.click("input[name=email]");
      await page.type("input[name=email]", lead.email);
      await page.click("input[name=tel]");
      await page.type("input[name=tel]", lead.phone);
      await page.click("textarea[name=message]");
      await page.type("textarea[name=message]", lead.message);
      await page.click("input[type=checkbox]");
      await page.click("button[type=submit]");
      await page.waitForSelector(".modal");
    },
    16000
  );
  test(
    "assert that <title> is correct",
    async () => {
      const title = await page.title();
      expect(title).toBe("Simplein");
    },
    5000
  );
});
```

require("dotenv").config();

const puppeteer = require("puppeteer");
let email = `${process.env.EMAIL}`;
let password = process.env.PASSWORD;

//Actions
const login = async (page) => {
  await page.goto("https://www.seminuevos.com/login");
  await page.waitForSelector("#email_login");
  await page.type("#email_login", email);
  await page.waitForSelector("#password_login");
  await page.type("#password_login", password);
  await page.waitForSelector("#sigin-form > button");
  await page.click("#sigin-form > button");
  await page.waitForSelector(
    "#public-layout > div > div.nav-area.relative > nav > ul > li:nth-child(1) > h2 > a"
  );
  await page.goto("https://www.seminuevos.com/wizard");
};

const selectors = {
  mark: "#dropdown_brands > div > div > ul > li:nth-child(1) > a",
  model: "#dropdown_models > div > div > ul > li:nth-child(2) > a",
  subType: "#dropdown_subtypes > div > div > ul > li:nth-child(4) > a",
  year: "#dropdown_years > div > div > ul > li:nth-child(5) > a",
  state: "#dropdown_provinces > div > div > ul > li:nth-child(19) > a",
  city: "#dropdown_cities > div > div > ul > li:nth-child(52) > a",
  travel: "#input_recorrido",
  phone: "#input_teléfono",
  price: "#input_precio",
};

const selectField = async ({ selector, page }) => {
  const selectorId = await page.$(selector);
  await selectorId.evaluate((selector) => selector.click());
};

const autoFill = async (page) => {
  //Select Mark
  await page.waitForTimeout(1500);
  await selectField({
    selector: selectors.mark,
    page,
  });

  //Slect Model
  await page.waitForTimeout(1000);
  await selectField({
    selector: selectors.model,
    page,
  });

  //Select Sub Type
  await page.waitForTimeout(250);
  await selectField({
    selector: selectors.subType,
    page,
  });

  //Select Year
  await page.waitForTimeout(250);
  await selectField({
    selector: selectors.year,
    page,
  });

  //Select State
  await page.waitForTimeout(250);
  await selectField({
    selector: selectors.state,
    page,
  });

  //Select City
  await page.waitForTimeout(250);
  await selectField({
    selector: selectors.city,
    page,
  });

  //Type Travel
  await page.waitForTimeout(500);
  await page.type(selectors.travel, "20000");

  //Type Phone
  await page.waitForTimeout(900);
  await page.type(selectors.phone, "8126057489");
};

const newVehicle = async (price, description) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1366, height: 768 });
  await page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
  );

  await login(page);
  await autoFill(page);

  await page.waitForTimeout(500)
  await page.type(selectors.price, price);

};

module.exports = newVehicle;
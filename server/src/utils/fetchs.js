require("dotenv").config();
const fs = require("fs");

const path = require("path");

const puppeteer = require("puppeteer");
let email = process.env.EMAIL;
let password = process.env.PASSWORD;

const selectors = {
  type: "#dropdown_types > div > div > ul > li:nth-child(1) > a",
  mark: "#dropdown_brands > div > div > ul > li:nth-child(1) > a",
  model: "#dropdown_models > div > div > ul > li:nth-child(2) > a",
  subType: "#dropdown_subtypes > div > div > ul > li:nth-child(4) > a",
  year: "#dropdown_years > div > div > ul > li:nth-child(5) > a",
  state: "#dropdown_provinces > div > div > ul > li:nth-child(19) > a",
  city: "#dropdown_cities > div > div > ul > li:nth-child(52) > a",
  travel: "#input_recorrido",
  phone: "#input_teléfono",
  transaction: "#dropdown_negotiable > div > div > ul > li:nth-child(2) > a",
};

const images = [
  path.resolve("src/images/1.jpg"),
  path.resolve("src/images/2.jpg"),
  path.resolve("src/images/3.jpg"),
];

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

const selectField = async ({ selector, page }) => {
  const selectorId = await page.$(selector);
  await selectorId.evaluate((selector) => selector.click());
};

const autoFill = async (page) => {
  await page.waitForTimeout(2000);

  //Select Mark
  await selectField({
    selector: selectors.mark,
    page,
  });

  //Slect Model
  await page.waitForSelector(selectors.model);
  await selectField({
    selector: selectors.model,
    page,
  });

  //Select Sub Type
  await page.waitForSelector(selectors.subType);
  await selectField({
    selector: selectors.subType,
    page,
  });

  //Select Year

  await page.waitForSelector(selectors.year);
  await selectField({
    selector: selectors.year,
    page,
  });

  //Select State

  await page.waitForSelector(selectors.state);
  await selectField({
    selector: selectors.state,
    page,
  });

  //Select City

  await page.waitForSelector(selectors.city);
  await selectField({
    selector: selectors.city,
    page,
  });

  //Type Travel

  await page.waitForSelector(selectors.travel);
  await page.type(selectors.travel, "20000");
};

const newVehicle = async (price, description) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
    // Solo si es necesario : executablePath: "/usr/bin/chromium-browser",
  });
  try {
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );

    await login(page);
    await autoFill(page);

    //Type Price from Request of the API
    await page.type("#input_precio", price);
    await page.click("#wizard > div > div > div > div > div > button");

    //Type Description from Request API
    await page.waitForSelector("#input_text_area_review");
    await page.type("#input_text_area_review", description);

    //Upload Images
    await page.waitForSelector("#Uploader");
    const uploader = await page.$("#Uploader");

    for (let i = 0; i < images.length; i++) {
      await page.waitForTimeout(1500);
      await uploader.uploadFile(images[i]);
    }

    //Next Step
    await page.click(
      "#wizard > div > div > div > div > div > button:nth-child(2)"
    );

    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2500);
    await page.click("#cancelButton");
    const path = `src/public/uploads/`;
    try {
      fs.unlinkSync(path+'/image.jpg');
      await page.screenshot({
        path: `${path}/image.jpg`,
        fullPage: true,
        quality: 100,
      });
    } catch (e) {
      fs.unlinkSync(path+'/image.jpg');
      fs.mkdirSync(path);
      await page.screenshot({
        path: `${path}/image.jpg`,
        fullPage: true,
        quality: 100,
      });
    }
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
};

module.exports = newVehicle;

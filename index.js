const puppeteer = require('puppeteer');

(async () => {
  console.log("در حال باز کردن مرورگر...");
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  console.log("سایت گوگل باز شد! عنوان صفحه: " + await page.title());
  await browser.close();
})();

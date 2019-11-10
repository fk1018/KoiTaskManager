import * as puppeteer from 'puppeteer';
(async (puppeteer)=>{
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.pdf({path: 'google.pdf'});

  await browser.close();
})(puppeteer);

console.log('hey');
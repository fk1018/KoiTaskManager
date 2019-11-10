import * as puppeteer from 'puppeteer';
import { Browser } from '../models/Browser';

(async puppeteer => {
  const browser = await puppeteer.launch();
  const taskManager: Browser = { browser, id: '1' };
  const page = await taskManager.browser.newPage();
  await page.goto('https://google.com');
  await page.pdf({ path: 'google.pdf' });

  await browser.close();
})(puppeteer);

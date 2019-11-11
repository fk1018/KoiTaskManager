import * as puppeteer from 'puppeteer';
import { TaskManager } from '../models/TaskManager';
import { Page } from '../models/Page';

(async puppeteer => {
  const browser = await puppeteer.launch();
  const taskManager: TaskManager = { browser, id: '1' };
  
  await browser.close();
})(puppeteer);

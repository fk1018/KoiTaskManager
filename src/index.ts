import * as puppeteer from 'puppeteer';
import { TaskManager } from '../models/TaskManager';
(async puppeteer => {
  const taskManager = new TaskManager();
  console.log(puppeteer, taskManager);
})(puppeteer);

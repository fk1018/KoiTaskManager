import * as puppeteer from 'puppeteer';
import { Task } from './Task';
export interface TaskManager {
  browser: puppeteer.Browser;
  id: string;
  tasks?: Task[];
}
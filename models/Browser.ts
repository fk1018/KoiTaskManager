import * as puppeteer from 'puppeteer';
import { Page } from './Page';

export interface Browser {
  browser: puppeteer.Browser;
  id: string;
  pages?: Page[];
}

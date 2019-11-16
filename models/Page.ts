import * as puppeteer from 'puppeteer';
export interface Page {
  id: string;
  page: puppeteer.Page;
}

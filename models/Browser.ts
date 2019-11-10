import * as puppeteer from 'puppeteer';
export interface Browser extends puppeteer.Browser {
  id:string;
}
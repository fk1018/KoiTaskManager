import * as puppeteer from 'puppeteer';
export interface Page extends puppeteer.Page {
  id:string;
}
import * as puppeteer from 'puppeteer';

export interface Site {
  id: string;
  name: string;
  actions?: { (arg0:puppeteer.Page): void }[];
}
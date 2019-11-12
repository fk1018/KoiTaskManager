import * as puppeteer from 'puppeteer';

export interface Site {
  id: string;
  name: string;
  action?: { (): void };
}
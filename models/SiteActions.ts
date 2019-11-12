import * as puppeteer from 'puppeteer';
import { Proxy } from './Proxy';
import { ProxyList } from './ProxyList';
import { Site } from './Site';
import { Task } from './Task';

export class SiteActions {
  async Google(sAP: SiteActionParams) {
    await sAP.page.goto(sAP.site.name);
    await sAP.page.pdf({ path: 'google.pdf' });
  }
  async YeezySupply(sp: SiteActionParams) {

  }
  getSite(id: string) {
    switch (id) {
      case '0':
        return this.Google;
      case '1':
        return this.YeezySupply;
      default:
        return this.Google;
    }
  }
}

export interface SiteActionParams {
  page: puppeteer.Page;
  proxy: Proxy;
  proxyList: ProxyList;
  site: Site;
  task: Task;
}

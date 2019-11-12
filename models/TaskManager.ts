import * as puppeteer from 'puppeteer';
import { Proxy } from './Proxy';
import { ProxyList } from './ProxyList';
import { Site } from './Site';
import { Task } from './Task';
export interface TaskManager {
  browser: puppeteer.Browser;
  id: string;
  tasks?: Task[];
  run?: {(p: Proxy[],proxyLists: ProxyList[],sites: Site[],tasks: Task[]):void};
}

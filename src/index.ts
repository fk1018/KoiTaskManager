import * as puppeteer from 'puppeteer';
import { ProxyList } from '../models/ProxyList';
import { Proxy } from '../models/Proxy';
import { Site } from '../models/Site';
import { Task } from '../models/Task';
import { TaskManager } from '../models/TaskManager';
(async puppeteer => {
  const proxyList: ProxyList[] = [
    {
      id: '1',
      name: 'proxy list 1',
      list: ['1'],
    },
  ];
  const sites: Site[] = [
    {
      id: '1',
      name: 'https://yeezysupply.com/',
    },
  ];
  const proxys: Proxy[] = [
    {
      id: '1',
      lists: ['1'],
      password: 'paseRiJw',
      server: 'snkrs-us-S201.chicooked.io:33128',
      userName: '8HtvXIZ6!a1',
    },
  ];

  const tasks: Task[] = [
    {
      id: '1',
      name: 'Yeezy Supply Test Task',
      site: '1',
      proxyList: '1',
    },
  ];

  const browser = await puppeteer.launch();

  const taskManager: TaskManager = { browser, id: '1' };

  await browser.close();
})(puppeteer);

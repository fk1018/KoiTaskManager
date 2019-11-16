import { Page } from './Page';
export interface Task {
  id: string;
  name: string;
  site: string;
  proxyList: string[];
  page?: Page;
}
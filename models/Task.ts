import { ProxyList } from './ProxyList';
import { Connection } from './Connection';
export interface Task {
  id: string;
  name: string;
  proxyList?: ProxyList;
  connection?: Connection;
}
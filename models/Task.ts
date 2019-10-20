import { ProxyList } from './ProxyList';
export interface Task {
  id: string;
  name: string;
  proxyList?: ProxyList;
}

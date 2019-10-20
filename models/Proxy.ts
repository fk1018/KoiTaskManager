import {ProxyList} from './ProxyList';
import {Connection} from './Connection';

export interface Proxy {
  connections?: Connection[];
  id: string;
  lists?: ProxyList[];
  password?: string;
  server: string;
  userName?: string;
}

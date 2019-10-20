import {ProxyList} from './ProxyList';
import {Connection} from './Connection';

export interface Proxy {
  id: string;
  password?: string;
  server: string;
  userName?: string;
  lists?: ProxyList[];
  connections: Connection[];
}

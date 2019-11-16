import { ProxyList } from './ProxyList';

export interface Proxy {
  id: string;
  lists?: Map<proxyListId, ProxyList>;
  password?: string;
  uri: string;
  userName?: string;
}

type proxyListId = string;
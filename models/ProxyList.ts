import { Proxy } from './Proxy';
export interface ProxyList {
  id: string;
  name: string;
  list: Map<ProxyId, Proxy[]>;
}

type ProxyId = string;

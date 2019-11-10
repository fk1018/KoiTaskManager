import {Site} from './Site';
import {ProxyList} from './ProxyList';

export interface Task {
  id: string;
  name: string;
  site: Site;
  proxyList: ProxyList;
}
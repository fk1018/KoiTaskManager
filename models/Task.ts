import { TaskStatus } from './TaskStatus';
import { Proxy } from './Proxy';
import { Page } from './Page';
import { Product } from './Product';
import { Site } from './Site';
export interface Task {
  id: string;
  name: string;
  site: Site;
  proxy?: Proxy;
  proxyLists?: Map<ProxyListId, any>;
  page?: Page;
  status: TaskStatus;
  getFromProxyPool: boolean;
  product: Product;
}

type ProxyListId = string;

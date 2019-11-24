import * as faker from 'faker';
import { Task } from './Task';
import { TaskStatus } from './TaskStatus';
import { Site } from './Site';
import { Proxy } from './Proxy';
import { ProxyList } from './ProxyList';
import { Product } from './Product';
export class TaskManager {
  tasks: Map<taskId, Task>;
  proxys: Map<proxyId, Proxy>;
  sites: Map<siteId, Site>;
  taskStatus: Map<taskStatusId, Task>;
  poducts: Map<productId, Product>;
  productLists: Map<proxyListId, ProxyList>;
  constructor() {}
}

type productId = string;
type proxyId = string;
type proxyListId = string;
type taskId = string;
type taskStatusId = string;
type siteId = string;

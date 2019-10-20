import { Proxy } from './Proxy';
export interface Task {
  id?: number;
  name?: string;
  proxylist: Proxy[];
}

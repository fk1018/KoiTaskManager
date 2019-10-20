import {ConnectionStatus} from './ConnectionStatus';
import {Proxy} from './Proxy';
import { Site } from './Site';
import { Task } from './Task';

export interface Connection {
  id: string;
  proxy: Proxy;
  site: Site;
  task: Task;
  status:ConnectionStatus;
}
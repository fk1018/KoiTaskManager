export interface Task {
  id: string;
  name: string;
  site: string;
  proxy?:string;
  proxyList: string[];
  page?: string;
}
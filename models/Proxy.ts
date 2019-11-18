export interface Proxy {
  id: string;
  listsContainedIn?: Map<ProxyListId, any>;
  password?: string;
  uri: string;
  userName?: string;
}

type ProxyListId = string;
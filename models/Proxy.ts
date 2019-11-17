export interface Proxy {
  id: string;
  lists?: Map<ProxyListId, any>;
  password?: string;
  uri: string;
  userName?: string;
}

type ProxyListId = string;

import * as faker from 'faker';
import { Task } from '../models/Task';
import { TaskStatus } from '../models/TaskStatus';
import { Site } from '../models/Site';
import { Proxy } from '../models/Proxy';
import { ProxyList } from '../models/ProxyList';
import { Product } from '../models/Product';

export const Any = {
  Product(
    {
      id = faker.random.uuid(),
      name = faker.random.word(),
      productId = faker.random.uuid(),
      variants = [],//@todo fix this
      sizes = [],//@todo fix thi
      positiveKeywords = [],//@todo fix this
      negativeKeywords = [],//@todo fix this
      url = faker.internet.url(),
      imgUrl = faker.internet.url(),
      styleCode = faker.random.uuid()
    }: ProductParams = {
      id :faker.random.uuid(),
      name : faker.random.word(),
      productId : faker.random.uuid(),
      variants : [],//@todo fix this
      sizes : [],//@todo fix thi
      positiveKeywords : [],//@todo fix this
      negativeKeywords : [],//@todo fix this
      url :  faker.internet.url(),
      imgUrl : faker.internet.url(),
      styleCode : faker.random.uuid()
    }
  ): Product {
    return {
      id,
      name,
      productId,
      variants,
      sizes,
      positiveKeywords,
      negativeKeywords,
      url,
      imgUrl,
      styleCode,
    };
  },
  Proxy(
    {
      id = faker.random.uuid(),
      listsContainedIn = new Map(),//@todo fix this
      password = faker.internet.password(),
      uri =  faker.internet.ip(),
      userName = faker.internet.userName()
    }: ProxyParams = {
      id :faker.random.uuid(),
      listsContainedIn: new Map(),//@todo fix this
      password: faker.internet.password(),
      uri: faker.internet.ip(),
      userName: faker.internet.userName()
    }
  ): Proxy {
    return {
      id,
      listsContainedIn,
      password,
      uri,
      userName,
    };
  },
  ProxyList(
    {
      id = faker.random.uuid(),
      list = new Map(),//@todo fix this
      name = faker.random.word()
    }: ProxyListParams = {
      id :faker.random.uuid(),
      list: new Map(),//@todo fix this
      name: faker.random.word()
    }
  ): ProxyList {
    return {
      id,
      list,
      name
    };
  },
  Site(
    {
      id = faker.random.uuid(),
      name = faker.random.word(),
      action = []//@todo fix this
    }: SiteParams = {
      id :faker.random.uuid(),
      name: faker.random.word(),
      action: []//@todo fix this
    }
  ): Site {
    return {
      id,
      name,
      action
    };
  },
  Task(
    {
      id = faker.random.uuid(),
      name = faker.random.word(),
      status = { id: faker.random.uuid(), display: faker.random.word() },
      site = { id: faker.random.uuid(), name: faker.random.word() },
      getFromProxyPool = faker.random.boolean(),
      product = {
        id: faker.random.uuid(),
        name: faker.random.word(),
        productId: faker.random.uuid(),
        variants: [],//@todo fix this
        sizes: [],//@todo fix this
        positiveKeywords: [],//@todo fix this
        negativeKeywords: [],//@todo fix this
        url: faker.internet.url(),
        imgUrl: faker.internet.url(),
        styleCode: faker.random.uuid(),
      },
      page = faker.random.uuid()
    }: TaskParams = {
      id: faker.random.uuid(),
      name: faker.random.word(),
      status: { id: faker.random.uuid(), display: faker.random.word() },
      site: { id: faker.random.uuid(), name: faker.random.word() },
      getFromProxyPool: faker.random.boolean(),
      product: {
        id: faker.random.uuid(),
        name:faker.random.word(),
        productId: faker.random.uuid(),
        variants: [],//@todo fix this
        sizes: [],//@todo fix this
        positiveKeywords: [],//@todo fix this
        negativeKeywords: [],//@todo fix this
        url: faker.internet.url(),
        imgUrl: faker.internet.url(),
        styleCode: faker.random.uuid(),
      },
    }
  ): Task {
    return {
      id,
      name,
      status,
      site,
      getFromProxyPool,
      product,
      page
    };
  },
  TaskStatus(
    {
      id = faker.random.uuid(),
      display = faker.random.word(),
    }: TaskStatusParams = {
      id :faker.random.uuid(),
      display: faker.random.word(),

    }
  ): TaskStatus {
    return {
      id,
      display
    };
  },
};

export const Helpers = {
  arrayOf<T>(generator: () => T, count: number): T[] {
    const returnArray: T[] = [];
    for (let i = 0; i < count; i++) {
      returnArray.push(generator());
    }
    return returnArray;
  },
};

type ProductParams = {
  id?: string;
  name?:string;
  productId?: string;
  variants?: string[];
  sizes?: string[];
  positiveKeywords?: string[];
  negativeKeywords?: string[];
  url?: string;
  imgUrl?: string;
  styleCode?: string;
};

type ProxyParams = {
  id?: string;
  listsContainedIn?: Map<string, any>;
  password?: string;
  uri?: string;
  userName?: string;
}

type ProxyListParams = {
  id?: string;
  list?: Map<string, Proxy[]>;
  name?: string;
}

type SiteParams = {
  id?: string;
  name?: string;
  action?: { (): void }[];
}

type TaskParams = {
  id?: string;
  name?: string;
  site?: Site;
  proxy?: Proxy;
  proxyLists?: Map<string, any>;
  page?: string;
  status?: TaskStatus;
  getFromProxyPool?: boolean;
  product?: Product;
};

type TaskStatusParams = {
  id?: string;
  display?: string;
}

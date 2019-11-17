import * as faker from 'faker';
import { Task } from '../models/Task';
import { TaskStatus } from '../models/TaskStatus';
import { Site } from '../models/Site';
import { Proxy } from '../models/Proxy';
import { Page } from '../models/Page';
import { Product } from '../models/Product';

export const Any = {
  arrayOf<T>(generator: () => T, count: number): T[] {
    const returnArray: T[] = [];
    for (let i = 0; i < count; i++) {
      returnArray.push(generator());
    }
    return returnArray;
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
        productId: faker.random.uuid(),
        variants:[],
        sizes:[],
        positiveKeywords: [],
        negativeKeywords: [],
        url: faker.internet.url(),
        imgUrl:faker.internet.url(),
        styleCode:faker.random.uuid()
      }
    }: TaskParams = {
      id: faker.random.uuid(),
      name: faker.random.word(),
      status: { id: faker.random.uuid(), display: faker.random.word() },
      site: { id: faker.random.uuid(), name: faker.random.word() },
      getFromProxyPool: faker.random.boolean(),
      product:{
        id: faker.random.uuid(),
        productId: faker.random.uuid(),
        variants:[],
        sizes:[],
        positiveKeywords: [],
        negativeKeywords: [],
        url: faker.internet.url(),
        imgUrl:faker.internet.url(),
        styleCode:faker.random.uuid()
      }
    }
  ): Task {
    return {
      id,
      name,
      status,
      site,
      getFromProxyPool,
      product
    };
  },
};

type TaskParams = {
  id?: string;
  name?: string;
  site?: Site;
  proxy?: Proxy;
  proxyLists?: Map<string, any>;
  page?: Page;
  status?: TaskStatus;
  getFromProxyPool?: boolean;
  product?: Product;
};

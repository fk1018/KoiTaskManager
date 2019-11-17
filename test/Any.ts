import * as faker from 'faker';
import { Task } from '../models/Task';
import { TaskStatus } from '../models/TaskStatus';
import { Site } from '../models/Site';
import { Proxy } from '../models/Proxy';
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
        variants: [],
        sizes: [],
        positiveKeywords: [],
        negativeKeywords: [],
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
        productId: faker.random.uuid(),
        variants: [],
        sizes: [],
        positiveKeywords: [],
        negativeKeywords: [],
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

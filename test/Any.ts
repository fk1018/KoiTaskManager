import * as faker from 'faker';
import { Task } from '../models/Task';

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
      site = faker.random.uuid(),
      proxyList = faker.random.uuid(),
    }: TaskParams = {
      id: faker.random.uuid(),
      name: faker.random.word(),
      site: faker.random.uuid(),
      proxyList: faker.random.uuid(),
    }
  ): Task {
    return {
      id,
      name,
      site,
      proxyList,
    };
  },
};

type TaskParams = {
  id?: string;
  name?: string;
  site?: string;
  proxyList?: string;
};

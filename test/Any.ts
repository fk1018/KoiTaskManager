import * as faker from 'faker';
import { Task } from '../models/Task';
// import { Proxy } from '../models/Proxy';
// import { ProxyList } from '../models/ProxyList';
// import { Connection } from '../models/Connection';

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
      name = faker.random.word() 
    }: TaskParams = {
      id: faker.random.uuid(),
      name: faker.random.word(),
    }
  ): Task {
    return {
      id,
      name,
    };
  },
};

function task(
  { id = faker.random.uuid(), name = faker.random.word() }: TaskParams = {
    id: faker.random.uuid(),
    name: faker.random.word(),
  }
): Task {
  return {
    id,
    name,
  };
}

type TaskParams = {
  id?: string;
  name?: string;
};

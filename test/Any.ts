import * as faker from 'faker';
import { Task } from '../models/Task';
import {Proxy} from '../models/Proxy';

interface GenericAnyFn<T> {
  (arg: T): T;
}
function arrayOf<T>(arg: T[]): T[] {
  return arg;
}
function any<T>(arg: T): T {
  return arg;
}
const task: GenericAnyFn<Task> = any((t)=>{
  return {
    id:t.id || faker.random.uuid(),
    name: t.name || faker.random.word()
  }
});

const proxy: GenericAnyFn<Proxy> = any((p)=>{
  return {
    ...p,
    id:p.id || faker.random.uuid(),
    server: p.server || `${faker.random.words().split(" ").join("")}.com`,
  }
});

export const Any = {
  arrayOf,
  Proxy:proxy,
  Task:task
}
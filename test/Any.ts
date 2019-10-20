import * as faker from 'faker';
import { Task } from "../models/Task";

interface GenericAnyFn<T> {
  (arg: T): T;
}
function any<T>(arg: T): T {
  return arg;
}
const task: GenericAnyFn<Task> = any((t)=>{
  return {
    id:t.id || faker.random.number({min:99999,max:999999}),
    name: t.name || faker.random.word()
  }
});

export const Any = {
  Task:task
}
import * as faker from 'faker';
import { Any } from './Any';
import { TaskStatus } from '../models/TaskStatus';

describe('task interface', () => {
  it('has an id', () => {
    const task = Any.Task();

    expect(task.id).toBeTruthy();
  });
  it('has a name', () => {
    const task = Any.Task();

    expect(task.name).toBeTruthy();
  });
  it('has a site', () => {
    const task = Any.Task();

    expect(task.site).toBeTruthy();
  });

});

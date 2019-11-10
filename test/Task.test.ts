import {Any} from './Any';

describe("task interface",()=>{
  it("has an id",()=>{
    const task = Any.Task();

    expect(task.id).toBeTruthy();
  });
  it("has a name",()=>{
    const task = Any.Task();

    expect(task.name).toBeTruthy();
  });
  it("has a site",()=>{
    const task = Any.Task();

    expect(task.site).toBeTruthy();
  });
  it("has a proxy list",()=>{
    const task = Any.Task();

    expect(task.proxyList).toBeTruthy();
  });
});
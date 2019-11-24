import * as faker from 'faker';
import { Product } from '../models/Product';
import { Proxy } from '../models/Proxy';
import { ProxyList } from '../models/ProxyList';
import { Site } from '../models/Site';
import { Task } from '../models/Task';
import { TaskStatus } from '../models/TaskStatus';

const Products: Product[] = [];
const Proxys: Proxy[] = [];
const ProxyLists: ProxyList[] = [];
const Sites: Site[] = [];
const Tasks: Task[] = [];
const TaskStatuss: TaskStatus[] = [];

//Create Task Status's
const idle : TaskStatus = {
  id: faker.random.uuid(),
  display:"Idle"
}
const starting : TaskStatus = {
  id: faker.random.uuid(),
  display:"Starting task"
}
const inLine: TaskStatus = {
  id: faker.random.uuid(),
  display:"In line"
}
const notFound : TaskStatus = {
  id: faker.random.uuid(),
  display:"Item not found retrying"
}
const addingToCart : TaskStatus = {
  id: faker.random.uuid(),
  display:"Adding item to cart"
}
const checkingOut : TaskStatus = {
  id: faker.random.uuid(),
  display:"Checking out"
}
const success : TaskStatus = {
  id: faker.random.uuid(),
  display:"Success"
}
const outOfStock : TaskStatus = {
  id: faker.random.uuid(),
  display:"Out of stock retrying"
}

//Create Product's
const yeezy500Salt : Product = {
  id: faker.random.uuid(),
  name:"Yeezy 500 salt",
  productId:"FW4839",
  sizes:["9","10","11"]
}

const powerPhase : Product = {
  id: faker.random.uuid(),
  name:"Yeezy Power Phase",
  productId:"FV6125",
  sizes:["8.5","7","10"]
}
//Create Site's
const yeezySupply : Site = {
  id:faker.random.uuid(),
  name:"Yeezy Supply"
}
//Create ProxyList's
const chiResi : ProxyList = {
  id: faker.random.uuid(),
  name: "Chi resi north virginia",
  list: new Map(),
}
//Create Proxy's
const proxy1 : Proxy = {
  id: faker.random.uuid(),
  uri:"snkrs-us-S77.chicooked.io:33128",
  userName:"8HtvXIZ6!a1",
  password:"paseRiJw"
}
//Assemble proxy and proxylist
chiResi.list.set(proxy1.id,proxy1);

proxy1.listsContainedIn?.set(chiResi.id,true);//maybe update the value to be a boolean?
//Create Task's
const task1 : Task = {
  id: faker.random.uuid(),
  name:"Yeezy Supply Power Phase task",
  site: yeezySupply,
  product: powerPhase,
  proxy:proxy1,
  proxyLists: new Map([[chiResi.id,true]]),
  getFromProxyPool:true
}
//Store data using eletron store

Products.push(yeezy500Salt,yeezy500Salt);
Proxys.push(proxy1);
ProxyLists.push(chiResi);
Sites.push(yeezySupply);
Tasks.push(task1);
TaskStatuss.push(idle,starting,inLine,notFound,addingToCart,checkingOut,success,outOfStock);
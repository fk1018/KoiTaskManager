import Store from 'electron-store';
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
const TaskStatus: TaskStatus[] = [];
const store = new Store();

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
const yeexySupply : Site = {
  id:faker.random.uuid(),
  name:"Yeezy Supply"
}
//Create ProxyList's
//Create Proxy's
//Create Task's

//Store data yusing eletron store

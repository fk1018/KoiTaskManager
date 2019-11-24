const Store = require('electron-store');
import {Product} from "../models/Product";
import {Proxy} from "../models/Proxy";
import {ProxyList} from "../models/ProxyList";
import {Site} from "../models/Site";
import {Task} from "../models/Task";

const Tasks : Task[] = [];

const store = new Store();
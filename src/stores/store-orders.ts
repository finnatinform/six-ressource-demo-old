import { Provides, AutoWired, Singleton, Provider } from 'typescript-ioc' ;
import DataStore from './store-data';
import Order from '../data/item-Order';


export abstract class AOrderStore extends DataStore<Order> {}

export class OrderStore extends AOrderStore {}
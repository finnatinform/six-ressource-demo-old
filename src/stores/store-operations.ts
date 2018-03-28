import { Provides, AutoWired, Singleton, Provider } from 'typescript-ioc' ;
import DataStore from './store-data';
import Operation from '../data/item-operation';


export abstract class AOperationStore extends DataStore<Operation> {}

export class OperationStore extends AOperationStore {}
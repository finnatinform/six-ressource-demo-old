import { Provides, AutoWired, Singleton, Provider } from 'typescript-ioc' ;
import DataStore from './store-data';
import Operation from '../data/item-operation';


export abstract class AOperationStore extends DataStore<Operation> {
    public abstract OperationsForRessource( _Ressource : number ):Array<Operation>;
}

export class OperationStore extends AOperationStore {
    public OperationsForRessource( _Ressource : number ):Array<Operation>{
        return this.SearchItemsByCondition( ( _Item : Operation ) => { return _Item.Ressource == _Ressource ; } );
    }
}
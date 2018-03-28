import { Provides, AutoWired, Singleton, Provider } from 'typescript-ioc' ;
import DataStore from './store-data';
import Ressource from '../data/item-ressource';


export abstract class ARessourceStore extends DataStore<Ressource> {
    public abstract getRessourceForProductionLevel( _ProductionLevel : number ):Array<Ressource> ;
}

export class RessourceStore extends ARessourceStore {
    public getRessourceForProductionLevel( _ProductionLevel : number ): Array<Ressource> {
        return this.SearchItemsByCondition( ( _Item : Ressource ) => { return _Item.ProductionLevel == _ProductionLevel ; } );
    }
}
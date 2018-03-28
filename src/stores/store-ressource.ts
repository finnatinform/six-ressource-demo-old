import { Provides, AutoWired, Singleton, Provider } from 'typescript-ioc' ;
import DataStore from './store-data';
import Ressource from '../data/item-ressource';


export abstract class ARessourceStore extends DataStore<Ressource> {
    public abstract get ProductionLevelCount():number ;
    public abstract getRessourcesForProductionLevel( _ProductionLevel : number ):Array<Ressource> ;
}

export class RessourceStore extends ARessourceStore {
    public get ProductionLevelCount(): number{
        let HLevel : number = 0;

        while( this.getRessourcesForProductionLevel(HLevel).length > 0 ){
            HLevel++;
        }

        return HLevel ;
    }
    public getRessourcesForProductionLevel( _ProductionLevel : number ): Array<Ressource> {
        return this.SearchItemsByCondition( ( _Item : Ressource ) => { return _Item.ProductionLevel == _ProductionLevel ; } );
    }
}
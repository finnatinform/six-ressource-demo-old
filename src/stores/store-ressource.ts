import { Provides, AutoWired, Singleton, Provider } from 'typescript-ioc' ;
import DataStore from './store-data';
import Ressource from '../data/item-ressource';


export abstract class ARessourceStore extends DataStore<Ressource> {
    public abstract get ProductionLevelCount():number ;
    public abstract getRessourceForProductionLevel( _ProductionLevel : number ):Array<Ressource> ;
}

export class RessourceStore extends ARessourceStore {
    public get ProductionLevelCount(): number{
        let HLevel : number = 0;

        while( this.getRessourceForProductionLevel(HLevel).length > 0 ){
            HLevel++;
        }

        return HLevel ;
    }
    public getRessourceForProductionLevel( _ProductionLevel : number ): Array<Ressource> {
        return this.SearchItemsByCondition( ( _Item : Ressource ) => { return _Item.ProductionLevel == _ProductionLevel ; } );
    }
}
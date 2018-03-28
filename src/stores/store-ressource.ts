import { Provides, AutoWired, Singleton, Provider } from 'typescript-ioc' ;
import DataStore from './store-data';
import Ressource from '../data/item-ressource';


export abstract class ARessourceStore extends DataStore {
    public abstract getRessourceForProductionLevel():Array<Ressource> ;
}

export class RessourceStore extends ARessourceStore {
    public getRessourceForProductionLevel(): Ressource[] {
        throw new Error('Method not implemented.');
    }
}
import { ARessourceStore } from './store-ressource';
import { Inject } from 'typescript-ioc';

export class Stores{
    @Inject
    public static RessourceStore : ARessourceStore ;
}
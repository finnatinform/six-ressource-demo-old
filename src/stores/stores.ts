import { ARessourceStore } from './store-ressource';
import { Inject } from 'typescript-ioc';
import { AModuleStore } from './store-modules';

export class Stores{
    @Inject
    public static RessourceStore : ARessourceStore ;

    @Inject
    public static ModuleStore : AModuleStore ;
}
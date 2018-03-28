import { ARessourceStore } from './store-ressource';
import { Inject } from 'typescript-ioc';
import { AModuleStore } from './store-modules';
import { AOperationStore } from './store-operations';
import { AOrderStore } from './store-orders';

export class Stores{
    @Inject
    public static RessourceStore : ARessourceStore ;

    @Inject
    public static OperationStore : AOperationStore ;

    @Inject
    public static OrderStore : AOrderStore ;

    @Inject
    public static ModuleStore : AModuleStore ;
}
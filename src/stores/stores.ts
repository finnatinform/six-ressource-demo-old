import { ARessourceStore } from './store-ressource';
import { Inject } from 'typescript-ioc';
import { AModuleStore } from './store-modules';
import { AOperationStore } from './store-operations';
import { AOrderStore } from './store-orders';

class StoreWrapper{
    @Inject
    public RessourceStore : ARessourceStore ;

    @Inject
    public OperationStore : AOperationStore ;

    @Inject
    public OrderStore : AOrderStore ;

    @Inject
    public ModuleStore : AModuleStore ;
}

// Needs Instance for Dependency Injection
let Stores : StoreWrapper = new StoreWrapper();
export = Stores ;
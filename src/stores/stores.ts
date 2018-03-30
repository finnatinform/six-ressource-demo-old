import { Container, Scope, Provider, Inject } from 'typescript-ioc' ;
import { ARessourceStore, RessourceStore } from './../stores/store-ressource';
import { AModuleStore , ModuleStore } from '../stores/store-modules';
import { AMobileService, MobileService } from '../services/service-mobile';
import { ALoaderService, LoaderService } from '../services/service-loader';
import { AOperationStore, OperationStore } from '../stores/store-operations';
import { AOrderStore, OrderStore } from '../stores/store-orders';
import { QueuedDispatcher } from '../app/app-dispatcher';
import AppAction from '../app/app-action';
import { Dispatcher } from 'flux';
import { ServerStore, AServerStore } from './store-server';

// Stores
Container.bind(ARessourceStore).to(RessourceStore).scope(Scope.Singleton);
Container.bind(AOperationStore).to(OperationStore).scope(Scope.Singleton);
Container.bind(AOrderStore).to(OrderStore).scope(Scope.Singleton);
Container.bind(AModuleStore).to(ModuleStore).scope(Scope.Singleton);
Container.bind(AServerStore).to(ServerStore).scope(Scope.Singleton);

// Services
Container.bind(AMobileService).to(MobileService).scope(Scope.Singleton);
Container.bind(ALoaderService).to(LoaderService).scope(Scope.Singleton);

// Dispatcher
Container.bind(Dispatcher).to(QueuedDispatcher).scope(Scope.Singleton);

// Initializiation
class StoreWrapper{
    @Inject
    public RessourceStore : ARessourceStore ;

    @Inject
    public OperationStore : AOperationStore ;

    @Inject
    public OrderStore : AOrderStore ;

    @Inject
    public ModuleStore : AModuleStore ;

    @Inject
    public ServerStore : AServerStore ;
}

// Needs Instance for Dependency Injection
let Stores : StoreWrapper = new StoreWrapper();
export = Stores ;
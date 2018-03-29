import { Container, Scope, Provider } from 'typescript-ioc' ;
import { ARessourceStore, RessourceStore } from './../stores/store-ressource';
import { AModuleStore , ModuleStore } from '../stores/store-modules';
import { AMobileService, MobileService } from '../services/service-mobile';
import { ALoaderService, LoaderService } from '../services/service-loader';
import { AOperationStore, OperationStore } from '../stores/store-operations';
import { AOrderStore, OrderStore } from '../stores/store-orders';
import { QueuedDispatcher } from '../app/app-dispatcher';
import AppAction from '../app/app-action';

// Providers

let ModuleStoreProvider:Provider = {
    get(){
        let AppDispatcher = new QueuedDispatcher<AppAction>();
        return new ModuleStore(AppDispatcher);
    }
} ;

// Stores
Container.bind(ARessourceStore).to(RessourceStore).scope(Scope.Singleton);
Container.bind(AOperationStore).to(OperationStore).scope(Scope.Singleton);
Container.bind(AOrderStore).to(OrderStore).scope(Scope.Singleton);
Container.bind(AModuleStore).provider(ModuleStoreProvider).scope(Scope.Singleton);

// Services
Container.bind(AMobileService).to(MobileService).scope(Scope.Singleton);
Container.bind(ALoaderService).to(LoaderService).scope(Scope.Singleton);
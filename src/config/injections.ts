import { Container, Scope } from 'typescript-ioc' ;
import { ARessourceStore, RessourceStore } from './../stores/store-ressource';
import { AModuleStore , ModuleStore } from '../stores/store-modules';
import { AMobileService, MobileService } from '../services/service-mobile';
import { ALoaderService, LoaderService } from '../services/service-loader';
import { AOperationStore, OperationStore } from '../stores/store-operations';
import { AOrderStore, OrderStore } from '../stores/store-orders';

// Stores
Container.bind(ARessourceStore).to(RessourceStore).scope(Scope.Singleton);
Container.bind(AOperationStore).to(OperationStore).scope(Scope.Singleton);
Container.bind(AOrderStore).to(OrderStore).scope(Scope.Singleton);
Container.bind(AModuleStore).to(ModuleStore).scope(Scope.Singleton);

// Services
Container.bind(AMobileService).to(MobileService).scope(Scope.Singleton);
Container.bind(ALoaderService).to(LoaderService).scope(Scope.Singleton);
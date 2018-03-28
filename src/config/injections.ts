import { Container, Scope } from 'typescript-ioc' ;
import { ARessourceStore, RessourceStore } from './../stores/store-ressource';
import { AModuleStore , ModuleStore } from '../stores/store-modules';

Container.bind(ARessourceStore).to(RessourceStore).scope(Scope.Singleton);
Container.bind(AModuleStore).to(ModuleStore).scope(Scope.Singleton);
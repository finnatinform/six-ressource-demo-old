import { Container, Scope } from 'typescript-ioc' ;
import { ARessourceStore, RessourceStore } from './../stores/store-ressource';

Container.bind(ARessourceStore).to(RessourceStore).scope(Scope.Singleton);
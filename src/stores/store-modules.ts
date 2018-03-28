import { Store } from 'flux/utils' ;
import AppAction from '../app/app-action';
import Module from '../internal/module';
import { Dispatcher } from 'flux';
import { Modules } from '../config/modules';

export abstract class AModuleStore extends Store<AppAction> {
    public abstract get Modules():Array<Module> ;
}

export class ModuleStore extends AModuleStore{
    private __Items : Array<Module> ;

    public get Modules():Array<Module>{
        return this.__Items ;
    }
    constructor( _Dispatcher : Dispatcher<AppAction> ){
        super(_Dispatcher);

        this.__Items = Modules.registerModules();
    }
}
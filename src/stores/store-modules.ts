import { Store } from 'flux/utils' ;
import AppAction from '../app/app-action';
import Module from '../internal/module';
import { Dispatcher } from 'flux';
import { Modules } from '../config/modules';

export abstract class AModuleStore extends Store<AppAction> {
    public abstract get Modules():Array<Module> ;
    public abstract ModuleByPath( _Path : string ):Module ;
}

export class ModuleStore extends AModuleStore{
    public ModuleByPath( _Path : string ): Module {
        let HItems : Array<Module> = this.SearchItemsByCondition( ( _Item : Module ) => { return _Item.Path == _Path ; } );
        switch (HItems.length) {
            case 0:
                throw new Error('Item not found');
            
            case 1:
                return HItems[0] ;

            default:
                throw new Error('Multiple Items with same Ident');
        }
    }
    private __Items : Array<Module> ;

    public get Modules():Array<Module>{
        return this.__Items ;
    }
    constructor( _Dispatcher : Dispatcher<AppAction> ){
        super(_Dispatcher);

        this.__Items = Modules.registerModules();
    }

    protected SearchItemsByCondition( _Condition : ( _Item : Module ) => boolean ) : Array<Module> {
        let HResult : Array<Module> = [] ;
        for( let HIndex : number = 0 ; HIndex < this.__Items.length; HIndex++ ){
            if( _Condition(this.__Items[HIndex]) ){
                HResult.push(this.__Items[HIndex]);
            }
        }


        return HResult ;
    }
}
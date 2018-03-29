import { Store } from 'flux/utils' ;
import AppAction from '../app/app-action';
import Item from '../data/item';
import { Dispatcher } from 'flux';
import { Inject } from 'typescript-ioc';

export default abstract class DataStore<T extends Item> extends Store< AppAction >{
    private __Items : Array<T> ;

    public ItemByIdent( _Ident : number ):T{
        let HItems : Array<T> = this.SearchItemsByCondition( ( _Item : T ) => { return _Item.IDENT == _Ident ; } );
        switch (HItems.length) {
            case 0:
                throw new Error('Item not found');
            
            case 1:
                return HItems[0] ;

            default:
                throw new Error('Multiple Items with same Ident');
        }
        
    }

    protected SearchItemsByCondition( _Condition : ( _Item : T ) => boolean ) : Array<T> {
        let HResult : Array<T> = [] ;
        for( let HIndex : number = 0 ; HIndex < this.__Items.length; HIndex++ ){
            if( _Condition(this.__Items[HIndex]) ){
                HResult.push(this.__Items[HIndex]);
            }
        }


        return HResult ;
    }

    constructor( @Inject _Dispatcher : Dispatcher<AppAction> ){
        super(_Dispatcher);
    }

}
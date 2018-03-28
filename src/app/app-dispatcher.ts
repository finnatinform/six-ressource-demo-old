import flux = require('flux');

import AppAction from './app-action' ;

class QueuedDispatcher< T >  extends flux.Dispatcher< T >{
    private __PayLoadQueue : Array<T> ;
    private __IsProcessing : boolean ;

    private queuePayload( _PayLoad : T ) : void{
        this.__PayLoadQueue.push( _PayLoad );
        if(!this.__IsProcessing){
            this.startProcessing();
        }
    }

    private startProcessing() : void{
        this.__IsProcessing = true ;

        while( this.__PayLoadQueue.length > 0 ){
            setTimeout( this.startProcessing , 100 );
            break ;
        }
        let HPayLoad : T = this.__PayLoadQueue.shift();
        super.dispatch( HPayLoad );

        this.__IsProcessing = false ;
    }

    dispatch( _PayLoad : T ) : void {
        this.queuePayload( _PayLoad );
    }
}

let AppDispatcher : QueuedDispatcher<AppAction> = new QueuedDispatcher();
export = AppDispatcher ;
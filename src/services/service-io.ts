import Service from './service';
import { Inject } from 'typescript-ioc';
import { Dispatcher } from 'flux';
import AppAction from '../app/app-action';
import * as SocketIOClient from 'socket.io-client' ;
import { AppActionType } from '../types/type-action';
import AppActionHandler = require('../app/app-action-handler');

export abstract class AIOService extends Service {
}

export class IOService extends AIOService {

    private __ConnectionSocket : SocketIOClient.Socket ;

    constructor( @Inject _Dispatcher : Dispatcher<AppAction> ){
        super(_Dispatcher);

        this.__ConnectionSocket = SocketIOClient();
        this.__ConnectionSocket.on( '*' , this.onPayLoadReceive );
    }

    private onPayLoadReceive( _Event : string , _PayLoad : any ):void{
        if( _Event == 'payload' ){
            AppActionHandler.onIOReceive( _PayLoad as AppAction );
        }
    }

    private sendPayLoad( _PayLoadType : AppActionType , _PayLoadData : any ){
        if( this.__ConnectionSocket.connected ){
            this.__ConnectionSocket.emit( 'payloadtype', _PayLoadData );
        } else {
            throw new Error('no connection');
        }
    }

    __onDispatch( _PayLoad : AppAction ){
        if( _PayLoad.shouldBeBroadcasted ){
            this.sendPayLoad( _PayLoad.actionType, _PayLoad.data );
        }
    }

}
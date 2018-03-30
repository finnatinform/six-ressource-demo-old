import { Store } from 'flux/utils' ;
import AppAction from '../app/app-action';
import { Inject } from 'typescript-ioc';
import { Dispatcher } from 'flux';
import { ServerStatus } from '../types/type-status';
import DesktopServer from '../server';


export abstract class AServerStore extends Store<AppAction> {
    public abstract get ServerStatus() : ServerStatus ;
}

export class ServerStore extends AServerStore{

    private __Server : DesktopServer ;
    private __Status : ServerStatus ;

    public get ServerStatus():ServerStatus{
        return this.__Status ;
    }


    private StartServer():void{
        this.__Server.start();
        this.__Status = ServerStatus.SRV_RUNNING;
    }

    private StopServer():void{
        this.__Server.stop();
        this.__Status = ServerStatus.SRV_STOPPED ;
    }

    constructor( @Inject _Dispatcher : Dispatcher<AppAction> ){
        super(_Dispatcher);

        this.__Server = new DesktopServer();
        this.__Status = ServerStatus.SRV_NONE ;
    }
}
import Express = require('express');
import http = require('http');
import { Server } from 'typescript-rest' ;
import Controller from './controller/controller' ;
import * as SocketIO from 'socket.io';

export default class DesktopServer{
    private __Application : Express.Application ;

    private __IO : SocketIO.Server ;
    private __Server : http.Server ;
    private __Port : number = 8080 ;


    constructor(){
        // Create Application
        this.__Application = Express();

        // Configurate Middleware
        this.configurateMiddleware();

        // Initialize Services
        // Server.useIoC(); // For Using Dependency Injection via typescript-ioc
        Server.buildServices(this.__Application, ...Controller);

        // Bind Context to Event Handlers
        this.onServerStart = this.onServerStart.bind(this);
        this.onServerStop = this.onServerStop.bind(this);
        this.socketListener = this.socketListener.bind(this);
        this.onPayLoadReceive = this.onPayLoadReceive.bind(this);
    }

    private onPayLoadReceive( _Event : string , _PayLoad : any ):void{
        // Broadcast to all clients
        this.__IO.emit( _Event , _PayLoad );
    }

    private configurateMiddleware():void{
        // Static File Server
        this.__Application.use( Express.static('public') );
    }

    /**
     * Starts the server
     */
    public start():void{
        this.__Server = this.__Application.listen(
            this.__Port ,
            this.onServerStart
        );

        // Initialize SocketIO
        this.__IO = SocketIO(this.__Server);
        this.__IO.on('connect', this.socketListener);
    }

    private socketListener( _Socket : SocketIO.Socket ):void{
        _Socket.on( '*' , this.onPayLoadReceive );
    }

    /**
     * Stops the server
     */
    public stop():void{
        this.__Server.close(this.onServerStop);
    }

    private onServerStart():void{
        console.log('server started');
    }

    private onServerStop():void{
        console.log('server stopped');
    }
}
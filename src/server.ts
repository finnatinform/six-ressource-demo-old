import Express = require('express');
import http = require('http');
import { Server } from 'typescript-rest' ;
import Controller from './controller/controller' ;

export default class DesktopServer{
    private __Application : Express.Application ;

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
        this.onPayLoadReceive = this.onPayLoadReceive.bind(this);
    }

    private onPayLoadReceive( _Event : string , _PayLoad : any ):void{
        // Broadcast to all clients
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

let HServer : DesktopServer = new DesktopServer();
HServer.start();
import AppAction from './app-action';
import { Dispatcher } from 'flux';
import { Inject } from 'typescript-ioc';

class AppActionHandlerClass{

    @Inject
    private __Dispatcher : Dispatcher<AppAction> ;

    public onIOReceive( _AppAction : AppAction ){
        this.__Dispatcher.dispatch( _AppAction );
    }
}

let AppActionHandler : AppActionHandlerClass = new AppActionHandlerClass();
export = AppActionHandler ;
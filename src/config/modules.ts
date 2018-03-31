import Module from './../internal/module';
import { GameView } from './../components/views/view-game' ;
import { SettingsView } from '../components/views/view-settings';
import { LogoView } from '../components/views/view-logo';

export namespace Modules{
    export function registerModules() : Array<Module>{
        let HResult : Array<Module> = [] ;

        HResult.push( new Module( '/game' , GameView, 'ion-trophy' ) );
        HResult.push( new Module( '/settings' , SettingsView, 'ion-gear-b' ) );
        HResult.push( new Module( '/logo' , LogoView, 'ion-coffee' ) );

        return HResult ;
    }
}
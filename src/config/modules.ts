import Module from './../internal/module';
import { GameView } from './../components/views/view-game' ;
import { SettingsView } from '../components/views/view-settings';
import { LogoView } from '../components/views/view-logo';

export namespace Modules{
    export function registerModules() : Array<Module>{
        let HResult : Array<Module> = [] ;

        HResult.push( new Module( '/game' , GameView ) );
        HResult.push( new Module( '/settings' , SettingsView ) );
        HResult.push( new Module( '/logo' , LogoView ) );

        return HResult ;
    }
}
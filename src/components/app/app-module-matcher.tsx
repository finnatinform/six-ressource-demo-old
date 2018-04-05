import * as React from 'react';
import Module from '../../internal/module';
import { Switch, Route, match } from 'react-router';
import { NotFoundView } from '../views/view-not-found';
import Stores = require('../../stores/stores-application');
import * as Styles from './app-module-matcher.scss' ;

export class ModuleMatcher{
    module : string ;
}

export interface IAppModuleMatcherProps { 
    match : match<ModuleMatcher> ;
}
export interface IAppModuleMatcherState {
    Modules : Array<Module> ;
}

export class AppModuleMatcherState implements IAppModuleMatcherState {
    Modules: Array<Module> ;

    constructor(){
        this.Modules = Stores.ModuleStore.Modules ;
    }
}

export class AppModuleMatcher extends React.Component<IAppModuleMatcherProps, IAppModuleMatcherState> {

    constructor( _Props : IAppModuleMatcherProps ){
        super(_Props);
        this.state = new AppModuleMatcherState() ;
    }

    private renderActiveRoute():JSX.Element{
        for( let HIndex : number = 0 ; HIndex < this.state.Modules.length ; HIndex++ ){
            if( this.state.Modules[HIndex].Path == this.props.match.params.module ){
                return React.createElement( this.state.Modules[HIndex].Component );
            }
        }
        return <NotFoundView /> ;
    }

    render() {
        return (
            <div className={Styles.application}>
                {this.renderActiveRoute()}
            </div>
        );
    }
}
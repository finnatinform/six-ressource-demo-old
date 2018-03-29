import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import Module from '../../internal/module';
import Stores = require('../../stores/stores');
import { ModuleControl } from './control-module';

export interface IModuleWrapperProps { }
export interface IModuleWrapperState {
    Modules : Array<Module> ;
}

export class ModuleWrapperState implements IModuleWrapperState{
    Modules : Array<Module> ;

    constructor(){
        this.Modules = Stores.ModuleStore.Modules ;
    }
}

export class ModuleWrapper extends React.Component<IModuleWrapperProps, IModuleWrapperState> {
    

    constructor( _Props : IModuleWrapperProps ){
        super(_Props);

        this.state = new ModuleWrapperState();
    }

    private renderModules():Array<JSX.Element>{
        let HResult : Array<JSX.Element> = [] ;

        for( let HIndex : number = 0; HIndex < this.state.Modules.length ; HIndex++ ){
            HResult.push(
                <ModuleControl Module={this.state.Modules[HIndex]} />
            );
        }

        return HResult ;
    }
    
    render(): JSX.Element {
        return (
            <div>
                {this.renderModules()}
            </div>
        );
    }
}
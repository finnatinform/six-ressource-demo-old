import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import Module from '../../internal/module';
import Stores = require('../../stores/stores-application');

export interface IModuleControlProps {
    Module : Module ;
}
export interface IModuleControlState {
    Module : Module ;
}

export class ModuleControlState implements IModuleControlState{
    Module : Module ;

    constructor( _Module : Module ){
        this.Module = _Module ;
    }
}

export class ModuleControl extends React.Component<IModuleControlProps, IModuleControlState> {
    

    constructor( _Props : IModuleControlProps ){
        super(_Props);

        this.state = new ModuleControlState(_Props.Module);
    }
    
    render(): JSX.Element {
        return (
            <div>
            </div>
        );
    }
}
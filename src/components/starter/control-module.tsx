import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import Module from '../../internal/module';
import { Stores } from '../../stores/stores';

export interface IModuleControlProps {
    Path : string ;
}
export interface IModuleControlState {
    Module : Module ;
}

export class ModuleControlState implements IModuleControlState{
    Module : Module ;

    constructor( _Path : string ){
        this.Module = Stores.ModuleStore.ModuleByPath(_Path);
    }
}

export class ModuleControl extends React.Component<IModuleControlProps, IModuleControlState> {
    

    constructor( _Props : IModuleControlProps ){
        super(_Props);

        this.state = new ModuleControlState(_Props.Path);
    }
    
    render(): JSX.Element {
        return (
            <div>
            </div>
        );
    }
}
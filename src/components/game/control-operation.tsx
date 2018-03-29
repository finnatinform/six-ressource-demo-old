import * as React from 'react';
import Stores = require('../../stores/stores');
import Operation from '../../data/item-operation';

export interface IOperationControlProps { 
    Ident : number ;
}
export interface IOperationControlState {
    Data : Operation ;
}

export class OperationControlState implements IOperationControlState{
    Data : Operation ;

    constructor( _Ident : number ){
        this.Data = Stores.OperationStore.ItemByIdent(_Ident);
    }
}

export class OperationControl extends React.Component<IOperationControlProps, IOperationControlState> {
    constructor( _Props : IOperationControlProps ){
        super(_Props);

        this.state = new OperationControlState(_Props.Ident);
    }

    render() {
        return <h1>{this.state.Data.ScriptedDay}</h1>;
    }
}
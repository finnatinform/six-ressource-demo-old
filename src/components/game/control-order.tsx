import * as React from 'react';
import Stores = require('../../stores/stores');
import Order from '../../data/item-Order';

export interface IOrderControlProps { 
    Ident : number ;
}
export interface IOrderControlState {
    Data : Order ;
}

export class OrderControlState implements IOrderControlState{
    Data : Order ;

    constructor( _Ident : number ){
        this.Data = Stores.OrderStore.ItemByIdent(_Ident);
    }
}

export class OrderControl extends React.Component<IOrderControlProps, IOrderControlState> {
    constructor( _Props : IOrderControlProps ){
        super(_Props);

        this.state = new OrderControlState(_Props.Ident);
    }

    render() {
        return <h1>{this.state.Data.Title}</h1>;
    }
}
import * as React from 'react';
import { Stores } from '../../stores/stores';
import Order from '../../data/item-Order';
import { OrderControl } from './control-order';

export interface IOrdersRowProps {
    Orders: Array<number>;
}
export interface IOrdersRowState {
    Orders: Array<number>;
}

export class OrdersRowState implements IOrdersRowState {
    Orders: Array<number>;

    constructor(_Orders: Array<number>) {
        this.Orders = _Orders;
    }
}

export class OrdersRow extends React.Component<IOrdersRowProps, IOrdersRowState> {
    constructor(_Props: IOrdersRowProps) {
        super(_Props);

        this.state = new OrdersRowState(_Props.Orders);
    }

    private renderOrders():Array<JSX.Element>{
        let HResult : Array<JSX.Element> = [] ;

        for( let HIndex : number = 0; HIndex < this.state.Orders.length ; HIndex++ ){
            HResult.push(
                <OrderControl Ident={this.state.Orders[HIndex]} />
            );
        }

        return HResult ;
    }

    render() {
        return (
            <div>
                {this.renderOrders()}
            </div>
        );
    }
}
import * as React from 'react';
import { Switch, Route } from 'react-router';
import { ProductionWrapper } from './production/production-wrapper';
import { OrderWrapper } from './order/orders-wrapper';

export interface IGameBoardProps {  }
export interface IGameBoardState {  }

export class GameBoard extends React.Component<IGameBoardProps, IGameBoardState> {
    render() {
        return (
            <div>
                <OrderWrapper />
                <ProductionWrapper />
            </div>
        );
    }
}
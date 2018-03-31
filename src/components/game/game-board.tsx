import * as React from 'react';
import { Switch, Route } from 'react-router';
import { ProductionWrapper } from './production-wrapper';
import { OrderWrapper } from './orders-wrapper';

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
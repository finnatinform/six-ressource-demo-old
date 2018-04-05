import * as React from 'react';
import { Switch, Route } from 'react-router';
import { GameBoard } from '../game/game-board';
import { NotFoundView } from './view-not-found';

export interface IGameViewProps {  }
export interface IGameViewState {  }

export class GameView extends React.Component<IGameViewProps, IGameViewState> {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/info' component={null} />
                    <Route path='/tutorial' component={null} />
                    <Route path='/board' component={GameBoard} />
                    {/* TODO: NotFound nedded? */}
                </Switch>
            </div>
        );
    }
}
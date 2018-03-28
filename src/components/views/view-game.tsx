import * as React from 'react';

export interface IGameViewProps {  }
export interface IGameViewState {  }

export class GameView extends React.Component<IGameViewProps, IGameViewState> {
    render() {
        return <h1>Game</h1>;
    }
}
import * as React from 'react';

export interface IProductionLevelProps {
    Level : number ;
}
export interface IProductionLevelState {
    
}

export class ProductionLevel extends React.Component<IProductionLevelProps, IProductionLevelState> {

    private renderRessources(){

    }

    render() {
        return <h1>Game</h1>;
    }
}
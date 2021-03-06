import * as React from 'react';
import { ProductionLevel } from './production-level';
import Stores = require('../../../stores/stores-application');

export interface IProductionWrapperProps { }
export interface IProductionWrapperState {
    ProductionLevelCount: number;
}

export class ProductionWrapperState implements IProductionWrapperState{
    ProductionLevelCount : number = 0 ;
    constructor(){
        this.ProductionLevelCount = Stores.RessourceStore.ProductionLevelCount ;
    }
}

export class ProductionWrapper extends React.Component<IProductionWrapperProps, IProductionWrapperState> {

    constructor( _Props : IProductionWrapperState ){
        super(_Props);
        this.state = new ProductionWrapperState();
    }

    private renderProductionLevels(): Array<JSX.Element> {
        let HResult: Array<JSX.Element> = [];

        for (let HIndex: number = 0; HIndex < this.state.ProductionLevelCount; HIndex++) {
            HResult.push(<ProductionLevel Level={HIndex} />);
        }

        return HResult;
    }
    
    render() {
        return (
            <div>
                {this.renderProductionLevels()}
            </div>
        );
    }
}
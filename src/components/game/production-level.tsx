import * as React from 'react';
import Ressource from '../../data/item-ressource';
import { Stores } from '../../stores/stores';
import { RessourceControl } from './control-ressource';

export interface IProductionLevelProps {
    Level : number ;
}
export interface IProductionLevelState {
    Ressources : Array<Ressource> ;
}

export class ProductionLevelState implements IProductionLevelState{
    Ressources : Array<Ressource> ;

    constructor( _Level : number ){
        this.Ressources = Stores.RessourceStore.getRessourceForProductionLevel(_Level);
    }
}

export class ProductionLevel extends React.Component<IProductionLevelProps, IProductionLevelState> {

    constructor( _Props : IProductionLevelProps ){
        super(_Props);
        this.state = new ProductionLevelState(_Props.Level);
    }

    private renderRessources():Array<JSX.Element>{
        let HResult : Array<JSX.Element> = [] ;

        for( let HIndex : number = 0; HIndex < this.state.Ressources.length ; HIndex++ ){
            HResult.push(
                <RessourceControl Ident={this.state.Ressources[HIndex].IDENT} />
            );
        }

        return HResult ;
    }

    render() {
        return(
            <div>
                {this.renderRessources()}
            </div>
        );
    }
}
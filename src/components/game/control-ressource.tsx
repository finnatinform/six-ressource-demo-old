import * as React from 'react';
import Ressource from '../../data/item-ressource';
import { Stores } from '../../stores/stores';

export interface IRessourceControlProps { 
    Ident : number ;
}
export interface IRessourceControlState {
    Data : Ressource ;
}

export class RessourceControlState implements IRessourceControlState{
    Data : Ressource ;

    constructor( _Ident : number ){
        this.Data = Stores.RessourceStore.ItemByIdent(_Ident);
    }
}

export class RessourceControl extends React.Component<IRessourceControlProps, IRessourceControlState> {

    constructor( _Props : IRessourceControlProps ){
        super(_Props);

        this.state = new RessourceControlState(_Props.Ident);
    }

    render() {
        return <h1>{this.state.Data.Title}</h1>;
    }
}
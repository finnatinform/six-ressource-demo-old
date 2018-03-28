import * as React from 'react';
import Ressource from '../../data/item-ressource';
import { Stores } from '../../stores/stores';
import Operation from '../../data/item-operation';
import { OperationControl } from './control-operation';

export interface IRessourceControlProps { 
    Ident : number ;
}
export interface IRessourceControlState {
    Data : Ressource ;
    Operations : Array<Operation> ;
}

export class RessourceControlState implements IRessourceControlState{
    Operations: Array<Operation>;
    Data : Ressource ;

    constructor( _Ident : number ){
        this.Data = Stores.RessourceStore.ItemByIdent(_Ident);
        this.Operations = Stores.OperationStore.OperationsForRessource(_Ident);
    }
}

export class RessourceControl extends React.Component<IRessourceControlProps, IRessourceControlState> {

    constructor( _Props : IRessourceControlProps ){
        super(_Props);

        this.state = new RessourceControlState(_Props.Ident);
    }

    private renderOperations() : Array<JSX.Element>{
        let HResult : Array<JSX.Element> = [] ;

        for( let HIndex : number = 0; HIndex < this.state.Operations.length ; HIndex++ ){
            HResult.push(
                <OperationControl Ident={this.state.Operations[HIndex].IDENT} />
            );
        }

        return HResult ;
    }

    render() {
        return(
            <div>
                {this.renderOperations()}
            </div>
        );
    }
}
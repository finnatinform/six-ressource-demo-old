import * as React from 'react';
import { ProductionLevel } from './production-level';
import { Stores } from '../../stores/stores';
import * as Collections from 'typescript-collections' ;
import Ressource from '../../data/item-ressource';
import Order from '../../data/item-Order';
import Operation from '../../data/item-operation';
import { OrdersRow } from './orders-row';

export interface IOrderWrapperProps { }
export interface IOrderWrapperState {
    RessourceOrders : Collections.Dictionary<Ressource,Array<number>> ;
}

export class OrderWrapperState implements IOrderWrapperState{
    RessourceOrders: Collections.Dictionary<Ressource, Array<number>>;

    constructor(){
        this.RessourceOrders = new Collections.Dictionary<Ressource,Array<number>>();
        this.fillDictionary();
    }

    private fillDictionary():void{
        let HRessources : Array<Ressource> = Stores.RessourceStore.getRessourcesForProductionLevel(0);

        for( let HIndex : number = 0; HIndex < HRessources.length ; HIndex++ ){
            let HOperations = Stores.OperationStore.OperationsForRessource(HRessources[HIndex].IDENT) ;

            let HOrders : Array<number> = [] ;
            for( let HOperationIndex : number = 0; HOperationIndex < HOperations.length ; HOperationIndex++ ){
                HOrders.push( HOperations[HOperationIndex].Order );
            }

            this.RessourceOrders.setValue( HRessources[ HIndex ] , HOrders );
        }
    }
}

export class OrderWrapper extends React.Component<IOrderWrapperProps, IOrderWrapperState> {

    constructor( _Props : IOrderWrapperState ){
        super(_Props);
        this.state = new OrderWrapperState();
    }

    private renderOrderRows(): Array<JSX.Element> {
        let HResult: Array<JSX.Element> = [];

        for (let HIndex: number = 0; HIndex < this.state.RessourceOrders.size(); HIndex++) {
            HResult.push(
                <OrdersRow Orders={this.state.RessourceOrders.values()[HIndex]} />
            );
        }

        return HResult;
    }
    
    render() {
        return (
            <div>
                {this.renderOrderRows()}
            </div>
        );
    }
}
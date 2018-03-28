import Ressource from './item-ressource';
import Order from './item-order';
import Operation from './item-afo';

export default class Game{
    public Ressources : Array<Ressource> ;
    public Orders : Array<Order> ;
    public Operations : Array<Operation> ;
}
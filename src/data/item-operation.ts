import Item from './item';

export default class Operation extends Item {
    public Ressource : number = -1 ;
    public Order : number = -1 ;

    public ScheduledDay : number = -1 ;
    public ScriptedDay : number = -1 ;
}
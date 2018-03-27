import Item from './item';
import { Priority } from '../types/type-priority';

export default class Order extends Item{
    public Title : string = '' ;
    public Priority : Priority = Priority.PRIO_DEFAULT ;
}
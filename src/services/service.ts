import { Store } from 'flux/utils' ;
import AppAction from './../app/app-action' ;

export default abstract class Service extends Store< AppAction >{}
import { AppActionType } from '../types/type-action';

export default class AppAction{
    actionType : AppActionType ;
    data : any ;
    shouldBeBroadcasted : boolean ;
}
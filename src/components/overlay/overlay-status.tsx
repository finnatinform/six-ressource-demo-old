import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { ServerStatus } from '../../types/type-status';

export interface IStatusOverlayProps { }
export interface IStatusOverlayState {
    ServerStatus: ServerStatus;
}

export class StatusOverlayState implements IStatusOverlayState {
    ServerStatus: ServerStatus;

    constructor() {
        this.ServerStatus = ServerStatus.SRV_NONE;
    }
}

export class StatusOverlay extends React.Component<IStatusOverlayProps, IStatusOverlayState> {

    private GetStatusColor():string{
        switch (this.state.ServerStatus) {
            case ServerStatus.SRV_RUNNING:
                return 'green' ;
                break;
            
            case ServerStatus.SRV_STOPPED:
                return 'red' ;
                break ;

            case ServerStatus.SRV_NEEDS_REBOOT:
                return 'blue' ;
                break ;

            default:
                break;
        }
    }

    private renderStatus(): JSX.Element {
        let HStatusString: string = '';

        switch (this.state.ServerStatus) {
            case ServerStatus.SRV_RUNNING:
                HStatusString = 'Server läuft unter localhost:8080'; // TODO : Anpassbarmachen!
                break;
            case ServerStatus.SRV_STOPPED:
                HStatusString = 'Server wurde gestoppt';
                break;
            case ServerStatus.SRV_NEEDS_REBOOT:
                HStatusString = 'Server muss neugestartet werden';
                break;

            default:
                break;
        }

        return <div className={this.GetStatusColor()} >{HStatusString}</div>;
    }
    render(): JSX.Element {
        if (this.state.ServerStatus > ServerStatus.SRV_NONE) {
            return this.renderStatus();
        } else {
            return null;
        }
    }
}
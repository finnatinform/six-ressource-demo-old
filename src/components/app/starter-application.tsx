import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { StatusOverlay } from '../overlay/overlay-status';

export interface IStarterApplicationProps { }
export interface IStarterApplicationState { }

export class StarterApplication extends React.Component<IStarterApplicationProps, IStarterApplicationState> {
    render(): JSX.Element {
        return (
            <div>
                <StatusOverlay />
                <ModuleWrapper />
            </div>
        );
    }
}
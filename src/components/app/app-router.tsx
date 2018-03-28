import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import { AppModuleMatcher } from './app-module-matcher' ;

export interface IAppRouterProps { }
export interface IAppRouterState { }

export class AppRouter extends React.Component<IAppRouterProps, IAppRouterState> {
    render(): JSX.Element {
        return (
            <HashRouter >
                <AppModuleMatcher />
            </HashRouter>
        );
    }
}
import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import { AppModuleMatcher } from './app-module-matcher' ;
import { Route } from 'react-router';

export interface IAppRouterProps { }
export interface IAppRouterState { }

export class AppRouter extends React.Component<IAppRouterProps, IAppRouterState> {
    render(): JSX.Element {
        return (
            <HashRouter >
                <Route path='/:module' component={AppModuleMatcher} />
            </HashRouter>
        );
    }
}
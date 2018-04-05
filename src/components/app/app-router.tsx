import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import { AppModuleMatcher } from './app-module-matcher';
import { Route, Switch } from 'react-router';
import { NotFoundView } from '../views/view-not-found';

export interface IAppRouterProps { }
export interface IAppRouterState { }

export class AppRouter extends React.Component<IAppRouterProps, IAppRouterState> {
    render(): JSX.Element {
        return (
            <HashRouter >
                <Switch>
                    <Route path='/:module' component={AppModuleMatcher} />
                    <Route component={NotFoundView} />
                </Switch>
            </HashRouter>
        );
    }
}
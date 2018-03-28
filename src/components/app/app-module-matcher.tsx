import * as React from 'react';
import * as Styles from './app-module-matcher.scss' ;
import Module from '../../internal/module';
import { Switch, Route } from 'react-router';

export interface IAppModuleMatcherProps {  }
export interface IAppModuleMatcherState {
    Modules : Array<Module> ;
}

export class AppModuleMatcherState implements IAppModuleMatcherState {
    Modules: Array<Module> ;

    constructor(){
        this.Modules = [] ;
    }
}

export class AppModuleMatcher extends React.Component<IAppModuleMatcherProps, IAppModuleMatcherState> {
    private renderRoutes():Array<JSX.Element>{
        let HRoutes : Array<JSX.Element> = [] ;

        for( let HIndex : number = 0; HIndex < this.state.Modules.length ; HIndex++ ){
            HRoutes.push(
                <Route path={this.state.Modules[HIndex].Path} component={this.state.Modules[HIndex].Component} />
            );
        }

        return HRoutes ;
    }
    render() {
        return (
            <div className={Styles.application}>
                <Switch>
                    {this.renderRoutes()}
                </Switch>
            </div>
        );
    }
}
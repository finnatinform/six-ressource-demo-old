import * as React from 'react';
import * as Styles from './application.scss' ;

export interface IApplicationProps {  }
export interface IApplicationState {  }

export class Application extends React.Component<IApplicationProps, IApplicationState> {
    render() {
        return (
            <div className={Styles.application}>six-ressource-demo</div>
        );
    }
}
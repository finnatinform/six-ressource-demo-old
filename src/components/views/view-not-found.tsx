import * as React from 'react';

export interface INotFoundViewProps {  }
export interface INotFoundViewState {  }

export class NotFoundView extends React.Component<INotFoundViewProps, INotFoundViewState> {
    render() {
        return <h1>404</h1>;
    }
}
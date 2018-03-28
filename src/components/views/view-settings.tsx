import * as React from 'react';

export interface ISettingsViewProps {  }
export interface ISettingsViewState {  }

export class SettingsView extends React.Component<ISettingsViewProps, ISettingsViewState> {
    render() {
        return <h1>Settings</h1>;
    }
}
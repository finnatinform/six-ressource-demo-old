import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRouter } from './components/app/app-router';
import './config/injections' ;

ReactDOM.render(
    <AppRouter />,
    document.getElementById('id-application')
);
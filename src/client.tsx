import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRouter } from './components/app/app-router';
import './config/injections' ;
import './styles/basics.scss' ;

ReactDOM.render(
    <AppRouter />,
    document.getElementById('id-application')
);
import 'babel-polyfill';
import React                            from 'react';
import {render}                         from 'react-dom';
import {BrowserRouter, history}     from 'react-router-dom';
import Routes                           from './Routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById("app")
);
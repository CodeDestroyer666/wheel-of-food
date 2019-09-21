import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Game from './components/tictactoe/game'
import Counter from './components/app'

import './index.css';


// ========================================

ReactDOM.render(
    <Router>
        <div>
            <AppBar position="static">
                <Toolbar>
                    <nav>
                        <Button component={Link} to="/counter/">Counter</Button>
                        <Button component={Link} to="/tictactoe/">Tic-Tac-Toe</Button>
                    </nav>
                </Toolbar>
            </AppBar>

            <Provider store={store}>
                <Route path="/counter/" exact component={Counter} />
                <Route path="/tictactoe/" exact component={Game} />
            </Provider>
        </div>
    </Router>
        /*<Game />
        <Provider store={store}>
            <Counter />
        </Provider>*/,
    document.getElementById('root')
);

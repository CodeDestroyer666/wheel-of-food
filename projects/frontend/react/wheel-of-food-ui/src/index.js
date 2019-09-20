import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Game from './components/tictactoe/game'
import Counter from './components/app'

import './index.css';


// ========================================

ReactDOM.render(
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/counter/">Counter</Link>
                    </li>
                    <li>
                        <Link to="/tictactoe/">Tic-Tac-Toe</Link>
                    </li>
                </ul>
            </nav>

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

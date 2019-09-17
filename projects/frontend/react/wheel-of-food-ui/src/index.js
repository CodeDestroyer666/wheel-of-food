import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { Game } from './components/tictactoe/game'
import Counter from './components/app'

import './index.css';


// ========================================

ReactDOM.render(
    <div>
        <Game />
        <Provider store={store}>
            <Counter />
        </Provider>
    </div>,
    document.getElementById('root')
);

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { count, handleExampleData, gameMove } from './reducers';
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
    {
        count: count,
        exampleData: handleExampleData,
        gameState: gameMove,
    }
)

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga);

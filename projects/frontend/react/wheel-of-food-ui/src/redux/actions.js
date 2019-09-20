import * as ActionTypes from './actionTypes';

export const addNumber = (number) => ({
    type: ActionTypes.ADD_NUMBER,
    payload: number
});

export const gameMove = (index) => ({
    type: ActionTypes.ADD_GAME_MOVE,
    squareIndex: index,
});

export const jumpToGameHistory = (step) => ({
    type: ActionTypes.JUMP_TO_GAME_HISTORY,
    step: step,
});

export const fetchExampleData = () => ({
    type: ActionTypes.EXAMPLE_FETCH_REQUESTED,
});
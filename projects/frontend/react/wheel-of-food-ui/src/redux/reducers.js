import * as ActionTypes from './actionTypes';

export const count = (state = 5, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NUMBER:
            return state + action.payload;
        default:
            return state;
    }
};

export const handleExampleData = (state = '', action) => {
    switch (action.type) {
        case 'EXAMPLE_FETCH_SUCCEEDED':
            return action.data;
        default:
            return state;
    }
};

const initialGameState = {
    history: [{
        squares: Array(9).fill(null),
        lastIndex: null,
    }],
    stepNumber: 0,
    xIsNext: true,
    winner: null,
};

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export const gameMove = (state = initialGameState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GAME_MOVE:
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();

            if (state.winner || squares[action.squareIndex]) {
                return state;
            }

            squares[action.squareIndex] = state.xIsNext ? 'X' : 'O';

            const winner = calculateWinner(squares);

            console.log(winner);

            return {
                ...state,
                history: history.concat([{
                    squares: squares,
                    lastIndex: action.squareIndex,
                }]),
                stepNumber: history.length,
                xIsNext: !state.xIsNext,
                winner: winner,
            }
        case ActionTypes.JUMP_TO_GAME_HISTORY:
            return {
                ...state,
                stepNumber: action.step,
                xIsNext: (action.step % 2) === 0,
                winner: action.step === state.history.length - 1 ? calculateWinner(state.history[action.step].squares) : null,
            }

        default:
            return state;
    }
}

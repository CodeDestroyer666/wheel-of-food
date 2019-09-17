import { ADD_NUMBER } from './actions';

export const count = (state = 5, action) => {
    switch (action.type) {
        case ADD_NUMBER:
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
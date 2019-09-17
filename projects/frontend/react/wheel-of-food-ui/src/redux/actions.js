export const ADD_NUMBER = 'ADD_NUMBER';

export const addNumber = (number) => ({
    type: ADD_NUMBER,
    payload: number
});

export const fetchExampleData = () => ({
    type: 'EXAMPLE_FETCH_REQUESTED',
});
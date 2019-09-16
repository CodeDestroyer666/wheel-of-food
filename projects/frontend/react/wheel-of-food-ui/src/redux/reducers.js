import { ADD_NUMBER } from './actions';

export const count = (state = { count: 5 }, action) => {
  switch (action.type) {
    case ADD_NUMBER:
        console.log(state);
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
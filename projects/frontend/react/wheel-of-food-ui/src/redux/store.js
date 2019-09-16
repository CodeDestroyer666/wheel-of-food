import { createStore } from 'redux';
import { count } from './reducers';

export const store = createStore(count);

console.log(store.getState());
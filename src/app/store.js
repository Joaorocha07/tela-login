import { createStore } from 'redux';
import authReducers from './reducers';

const store = createStore(authReducers);

export default store;

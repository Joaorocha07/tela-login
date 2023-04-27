import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({});

const middleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat();
};

const store = configureStore({ reducer, middleware });

export default store;

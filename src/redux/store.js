import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import {root} from './saga.root';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({
    loginReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(root)

export default store;
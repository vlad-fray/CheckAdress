import { checkAddressReducer } from './checkAddress/reducer';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ checkAdress: checkAddressReducer });

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

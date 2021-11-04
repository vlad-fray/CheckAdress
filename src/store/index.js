import { searchAddressReducer } from './searchAddress/reducer';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ searchAdress: searchAddressReducer });

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './index';
import logger from 'redux-logger';
import async from '../middleware/async';

const middleware = [async, logger];
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnchancers(applyMiddleware(...middleware)));
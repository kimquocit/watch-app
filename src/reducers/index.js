import { combineReducers } from 'redux';
import items from './items';
import message from './message';

const appReducers = combineReducers({
    items,
    message
});

export default appReducers;
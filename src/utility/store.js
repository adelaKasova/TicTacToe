import { createStore, combineReducers } from "redux";
import reducer from './reducer';

const mainReducer = combineReducers({reducer});

export default (state = {}) => {
	return createStore(mainReducer, state);
}
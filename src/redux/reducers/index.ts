import { combineReducers } from 'redux';
import todoReducer from './todoReducer/reducer';

const reducers = combineReducers({
    todo: todoReducer,
})

export default reducers;
export type State = ReturnType<typeof reducers>;
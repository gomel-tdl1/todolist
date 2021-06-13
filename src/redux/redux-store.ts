import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { todolistReducer } from "./todolist-reducer";


let reducersBatch = combineReducers({
    todolist: todolistReducer
});

type ReducerBatchType = typeof reducersBatch;
export type AppStateType = ReturnType<ReducerBatchType>;

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

export default store;
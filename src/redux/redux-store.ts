import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {todolistReducer} from "./todolist-reducer";
import {errorReducer} from "./error-reducer";


let reducersBatch = combineReducers({
    todolist: todolistReducer,
    error: errorReducer
});

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

type ReducerBatchType = typeof reducersBatch;
export type AppStateType = ReturnType<ReducerBatchType>;

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

export default store;
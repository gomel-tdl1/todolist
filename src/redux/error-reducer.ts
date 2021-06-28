import {InferActionsTypes} from "./redux-store";

export const actionsError = {
    setError: (error: ErrorType) => ({
        type: 'SET_ERROR',
        error
    } as const)
}

type ActionsTypes = InferActionsTypes<typeof actionsError>
export type ErrorType = {
    message: string,
    description: string
}
let initialState = {
    error: null as ErrorType | null
};
export type InitialStateType = typeof initialState;
export const errorReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_ERROR':
            return {...state, error: action.error}
        default:
            return {...state};
    }
};
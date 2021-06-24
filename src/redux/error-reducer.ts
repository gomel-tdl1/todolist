const SET_ERROR = "SET_ERROR"

export type SetErrorType = {
    type: typeof SET_ERROR
    error: ErrorType
}
export const setError = (error: ErrorType): SetErrorType => ({
    type: SET_ERROR,
    error
});

type ActionsTypes = SetErrorType
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
        case "SET_ERROR":
            return {...state, error: action.error}
        default:
            return {...state};
    }
};
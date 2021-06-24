import {ThunkAction} from "redux-thunk";
import {v1} from "uuid";
import {AppStateType} from "./redux-store";
import {setError, SetErrorType} from "./error-reducer";

const SET_TASK_COMPLETE = "SET_TASK_COMPLETE"
const ADD_TASK = "ADD_TASK"
const ADD_LIST = "ADD_LIST"
const SET_LOADING = "SET_LOADING"

export type SetLoadingType = {
    type: typeof SET_LOADING
    isLoading: boolean
}
export const setLoading = (isLoading: boolean): SetLoadingType => ({
    type: SET_LOADING,
    isLoading
});

export type SetTaskCompleteType = {
    type: typeof SET_TASK_COMPLETE
    listId: string
    taskId: string
}
export const setTaskComplete = (listId: string, taskId: string): SetTaskCompleteType => ({
    type: SET_TASK_COMPLETE,
    listId,
    taskId
});

export type AddTaskType = {
    type: typeof ADD_TASK
    description: string
    listId: string
}
export const addTask = (description: string, listId: string): AddTaskType => ({
    type: ADD_TASK,
    description,
    listId
})

export type AddListType = {
    type: typeof ADD_LIST
    description: string
    title: string
}
export const addList = (title: string, description: string): AddListType => ({
    type: ADD_LIST,
    description,
    title
})
type ActionsTypes = SetLoadingType | SetTaskCompleteType | AddTaskType | AddListType | SetErrorType

export type ListType = {
    id: string
    title: string | null,
    description: string | null
    tasks: TaskType[] | null
}
export type TaskType = {
    id: string
    done: boolean
    name: string
}
let initialState = {
    lists: [] as ListType[],
    isLoading: false
};
export type InitialStateType = typeof initialState;
export const todolistReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    let newLists = [...state.lists];
    switch (action.type) {
        case SET_TASK_COMPLETE:
            // @ts-ignore
            let editingTask = newLists.find(list => action.listId === list.id).tasks.find(task => action.taskId === task.id)
            // @ts-ignore
            editingTask.done = !editingTask.done
            newLists = newLists.map((list) => {
                if (list.id === action.listId) {
                    // @ts-ignore
                    let newTasks = list.tasks.map((task) => {
                        if (task.id === action.taskId) return editingTask
                        return task
                    })
                    // @ts-ignore
                    list.tasks = newTasks
                    return list
                }
                return list
            })
            return {...state, lists: newLists}
        case ADD_TASK:
            let tasks = newLists.find(list => list.id === action.listId)?.tasks
            let newTask: TaskType = {
                id: v1(),
                done: false,
                name: action.description
            }
            // @ts-ignore
            tasks = [...tasks, newTask]
            newLists = newLists.map((list) => {
                if (list.id === action.listId) {
                    // @ts-ignore
                    list.tasks = tasks
                    return list
                }
                return list
            })
            return {...state, lists: newLists}
        case ADD_LIST:
            let newList = {
                id: v1(),
                title: action.title,
                description: action.description,
                tasks: []
            }
            return {...state, lists: [...state.lists, newList]}
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return {...state};
    }
};

export type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
export const addListThunk = (title: string, description: string): ThunkActionType => async (dispatch) => {
    try{
        dispatch(setLoading(true))
        await dispatch(addList(title, description))
        dispatch(setLoading(false))
    }catch (e) {
        dispatch(setError({
            message: 'List is not added',
            description: String(e.message)
        }))
    }

}
import {ThunkAction} from "redux-thunk";
import {v1} from "uuid";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {actionsError} from "./error-reducer";

export const actionsTodolist = {
    setLoading: (isLoading: boolean) => ({
        type: 'SET_LOADING',
        isLoading
    } as const),
    setTaskComplete: (listId: string, taskId: string) => ({
        type: 'SET_TASK_COMPLETE',
        listId,
        taskId
    } as const),
    addTask: (description: string, listId: string) => ({
        type: 'ADD_TASK',
        description,
        listId
    } as const),
    deleteTask: (listId: string, taskId: string) => ({
        type: 'DELETE_TASK',
        listId,
        taskId
    } as const),
    addList: (title: string, description: string) => ({
        type: 'ADD_LIST',
        description,
        title
    } as const),
    deleteList: (listId: string) => ({
        type: 'DELETE_LIST',
        listId
    } as const)
}

type ActionsTypes = InferActionsTypes<typeof actionsTodolist> | InferActionsTypes<typeof actionsError>

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
        case 'SET_TASK_COMPLETE':
            // @ts-ignore
            let editingTask = newLists.find(list => action.listId === list.id).tasks.find(task => action.taskId === task.id)
            // @ts-ignore
            editingTask.done = !editingTask.done
            newLists = newLists.map((list) => {
                if (list.id === action.listId) {
                    // @ts-ignore
                    list.tasks = list.tasks.map((task) => {
                        if (task.id === action.taskId) return editingTask
                        return task
                    })
                    return list
                }
                return list
            })
            return {...state, lists: newLists}
        case 'ADD_TASK':
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
        case 'DELETE_TASK':
            let tasksForDelete = newLists.find(list => list.id === action.listId)?.tasks
            // @ts-ignore
            tasksForDelete = tasksForDelete.filter(task => action.taskId !== task.id);
            newLists = newLists.map((list) => {
                if (list.id === action.listId) {
                    // @ts-ignore
                    list.tasks = tasksForDelete
                    return list
                }
                return list
            })
            return {...state, lists: newLists}
        case 'ADD_LIST':
            let newList = {
                id: v1(),
                title: action.title,
                description: action.description,
                tasks: []
            }
            return {...state, lists: [...state.lists, newList]}
        case 'DELETE_LIST':
            return {...state, lists: state.lists.filter(list => action.listId !== list.id)}
        case 'SET_LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return {...state};
    }
};

export type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
export const addListThunk = (title: string, description: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(actionsTodolist.setLoading(true))
        await dispatch(actionsTodolist.addList(title, description))
        dispatch(actionsTodolist.setLoading(false))
    } catch (e) {
        dispatch(actionsError.setError({
            message: 'List is not added',
            description: String(e.message)
        }))
    }
}
export const addTaskThunk = (description: string, listId: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(actionsTodolist.setLoading(true))
        await dispatch(actionsTodolist.addTask(description, listId))
        dispatch(actionsTodolist.setLoading(false))
    } catch (e) {
        dispatch(actionsError.setError({
            message: 'Task is not added',
            description: String(e.message)
        }))
    }
}
export const deleteTaskThunk = (listId: string, taskId: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(actionsTodolist.setLoading(true))
        await dispatch(actionsTodolist.deleteTask(listId, taskId))
        dispatch(actionsTodolist.setLoading(false))
    } catch (e) {
        dispatch(actionsError.setError({
            message: 'Task is not deleted',
            description: String(e.message)
        }))
    }
}
export const deleteListThunk = (listId: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(actionsTodolist.setLoading(true))
        await dispatch(actionsTodolist.deleteList(listId))
        dispatch(actionsTodolist.setLoading(false))
    } catch (e) {
        dispatch(actionsError.setError({
            message: 'List is not deleted',
            description: String(e.message)
        }))
    }
}
export const toggleCompleteTaskThunk = (listId: string, taskId: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(actionsTodolist.setLoading(true))
        await dispatch(actionsTodolist.setTaskComplete(listId, taskId))
        dispatch(actionsTodolist.setLoading(false))
    } catch (e) {
        dispatch(actionsError.setError({
            message: 'Task complete is not edited',
            description: String(e.message)
        }))
    }
}
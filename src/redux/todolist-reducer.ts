const SET_TASK_COMPLETE = "SET_TASK_COMPLETE"
type SetTaskCompleteType = {
    type: string
    listId: number
    taskId: number
}
const setTaskComplete = (listId: number, taskId: number): SetTaskCompleteType => ({
    type: SET_TASK_COMPLETE,
    listId,
    taskId
});

export type ListType = {
    title: string,
    description: string
    tasks: Array<TaskType>
}
export type TaskType = {
    done: boolean
    name: string
}
let initialState = {
    lists: [
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },
        {
            title: 'jopa',
            description: 'dfkjkskdjfnkjsdbfkjbfdsgbsdfgbbkfs',
            tasks: [
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                },
                {
                    done: false,
                    name: "first task"
                }
            ]
        },

    ] as ListType[]
};
export type InitialStateType = typeof initialState;
export const todolistReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case SET_TASK_COMPLETE:
            let newLists = [...state.lists];
            let editingTask = newLists[action.listId].tasks[action.taskId]
            editingTask.done = !editingTask.done
            newLists = newLists.map((list, listId) => {
                if (listId === action.listId) {
                    let newTasks = list.tasks.map((task, taskId) => {
                        if(taskId === action.taskId) return editingTask
                        return task
                    })
                    list.tasks = newTasks
                    return list
                }
                return list
            })
            return {...state, lists: newLists}
        default:
            return {...state};
    }
};
import {ListType, todolistReducer} from "./todolist-reducer";


test('todolist reducer should return lists with new added list', () => {
    let initialState = {
        lists: [] as ListType[],
        isLoading: false
    };
    const endState = todolistReducer(initialState, {type: "ADD_LIST", title: 'lalala', description: ''})
    expect(endState.lists.length).toBe(1)
})
test('todolist reducer should return list with new task', () => {
    let initialState = {
        lists: [
            {
                id: 'a0e79330-d762-11eb-9675-9bfc12325505',
                title: 'lalala',
                description: '',
                tasks: []
            }
        ] as ListType[],
        isLoading: false
    };
    const endState = todolistReducer(initialState, {type: "ADD_TASK", description: 'do something', listId: 'a0e79330-d762-11eb-9675-9bfc12325505'})
    expect(endState.lists[0].tasks?.length).toBe(1)
    console.log(endState.lists[0].tasks?[0].name)
    expect(endState.lists[0].tasks?[0].name).toBe('do something')
})
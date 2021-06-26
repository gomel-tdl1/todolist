import React, {ChangeEvent, FC, useState} from 'react';
import {ListType, SetTaskCompleteType, TaskType} from '../../redux/todolist-reducer';
import TaskCard from "./TaskCard";
import {Button, Input, Modal, Radio, RadioChangeEvent} from "antd";
import {CloseCircleTwoTone, DeleteOutlined} from "@ant-design/icons";

type PropsType = {
    list: ListType,
    addTask: (description: string, taskId: string) => void,
    listId: string,
    setTaskComplete: (listId: string, taskId: string) => SetTaskCompleteType
    deleteTask: (listId: string, taskId: string) => void
    deleteList: (listId: string) => void
}
const TodolistCard: FC<PropsType> = (props) => {
    let [taskDescription, setTaskDescription] = useState('');
    const addNewTask = () => {
        props.addTask(taskDescription.trim(), props.listId);
        setTaskDescription('')
    }
    const options = [
        {label: 'All', value: 'all'},
        {label: 'Active', value: 'active'},
        {label: 'Completed', value: 'completed'},
    ];
    let [changedFilter, setChangedFilter] = useState<string>('all');
    let filteredTasks: TaskType[] | null = props.list.tasks ? props.list.tasks.filter(task => {
        if (changedFilter === 'all') return true
        if (changedFilter === 'active') return !task.done
        if (changedFilter === 'completed') return task.done
    }) : null
    const handleFilterSelect = (e: RadioChangeEvent) => {
        setChangedFilter(e.target.value);
    }

    const handleDeleteList = () => {
        Modal.confirm({
            title: 'Delete list',
            icon: <DeleteOutlined/>,
            content: 'Do you really want to delete this list?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                props.deleteList(props.listId)
            },
            onCancel() {
                return
            },
        });
    }
    return (
        <div
            className='flex flex-col items-center col-span-3 md:col-span-1 py-6 px-1 md:px-6 border-black border-2 border-opacity-10 relative'>
            <CloseCircleTwoTone className='absolute top-2 right-2 transform scale-150' onClick={handleDeleteList}/>
            <h1 className="text-lg">{props.list.title}</h1>
            <p className="mb-4">{props.list.description}</p>
            <div className='flex gap-2 items-center w-full px-8'>
                <Input
                    placeholder="Enter task"
                    allowClear
                    size="large"
                    value={taskDescription}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setTaskDescription(e.target.value)
                    }}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.charCode === 13 && taskDescription) addNewTask()
                    }}/>
                <Button type={'primary'} size={'large'} onClick={addNewTask} disabled={!taskDescription}>Add
                    task</Button>
            </div>
            <div className='pt-3'>
                <Radio.Group
                    options={options}
                    onChange={handleFilterSelect}
                    value={changedFilter}
                    optionType="button"
                />
            </div>

            <div className='py-4 px-8 flex flex-col gap-2 items-start w-full '>{/*@ts-ignore*/}
                {filteredTasks.length !== 0 && filteredTasks.map((task) => {
                    return <TaskCard done={task.done} name={task.name} key={task.id} taskId={task.id}
                                     setTaskComplete={props.setTaskComplete} listId={props.listId}
                                     deleteTask={props.deleteTask}/>
                })}
            </div>

        </div>
    );
}

export default TodolistCard;

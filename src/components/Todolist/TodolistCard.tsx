import React, {ChangeEvent, FC, KeyboardEventHandler, useState} from 'react';
import {AddTaskType, ListType, SetTaskCompleteType} from '../../redux/todolist-reducer';
import TaskCard from "./TaskCard";
import {Button, Input} from "antd";

type PropsType = {
    list: ListType,
    addTask: (description: string, taskId: string) => AddTaskType,
    listId: string,
    setTaskComplete: (listId: string, taskId: string) => SetTaskCompleteType
}
const TodolistCard: FC<PropsType> = (props) => {
    let [taskDescription, setTaskDescription] = useState('');
    const addNewTask = () => {
        props.addTask(taskDescription.trim(), props.listId);
        setTaskDescription('')
    }
    return (
        <div className='flex flex-col items-center col-span-1 p-6 border-black border-2 border-opacity-10'>
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
                    if(e.charCode ===13 && taskDescription)addNewTask()
                }}/>
                <Button type={'primary'} size={'large'} onClick={addNewTask} disabled={!taskDescription}>Add task</Button>
            </div>
            <div className='mt-4'>{/*@ts-ignore*/}
                {props.list.tasks.length !== 0 && props.list.tasks.map((task, index) => {
                    return <TaskCard done={task.done} name={task.name} key={index} taskId={task.id}
                                     setTaskComplete={props.setTaskComplete} listId={props.listId}/>
                })}
            </div>

        </div>
    );
}

export default TodolistCard;

import React, {FC} from 'react';
import {ListType} from '../../redux/todolist-reducer';
import TaskCard from "./TaskCard";

const TodolistCard: FC<{ list: ListType }> = React.memo((props) => {
    return (
        <div className='flex flex-col items-center col-span-1'>
            <h1 className="text-lg">{props.list.title}</h1>
            <p>{props.list.description}</p>
            {props.list.tasks.map((task, index) => {
                return <TaskCard done={task.done} name={task.name} key={index}/>
            })}
        </div>
    );
})

export default TodolistCard;

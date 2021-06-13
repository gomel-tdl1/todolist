import React from 'react';
import { ListType } from '../../redux/todolist-reducer';

const TodolistCard = (props: { list: ListType }) => {
    return (
        <div className='flex flex-col items-center'>
            <h1>{props.list.title}</h1>
            <p>{props.list.description}</p>
            {props.list.tasks.map(task => {

            })}
        </div>
    );
}

export default TodolistCard;

import React, {FC} from 'react';
import {TaskType} from '../../redux/todolist-reducer';
import {Checkbox} from "antd";

const TaskCard: FC<TaskType> = React.memo((props ) => {
    return (
        <div className='flex flex-col items-center col-span-1'>
            <Checkbox value={props.done}>{props.name}</Checkbox>
        </div>
    );
})

export default TaskCard;

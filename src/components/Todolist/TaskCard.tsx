import React, {FC} from 'react';
import {SetTaskCompleteType, TaskType} from '../../redux/todolist-reducer';
import {Checkbox} from "antd";

type PropsType = {
    done: boolean
    name: string
    taskId: string
    listId: string
    setTaskComplete: (listId: string, taskId: string) => SetTaskCompleteType
}
const TaskCard: FC<PropsType> = React.memo((props) => {
    return (
        <div className='flex flex-col items-center col-span-1'>
            <Checkbox checked={props.done} onChange={()=>{
                props.setTaskComplete(props.listId, props.taskId)
            }}>{props.name}</Checkbox>
        </div>
    );
})

export default TaskCard;

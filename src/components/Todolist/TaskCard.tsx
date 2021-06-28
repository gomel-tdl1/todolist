import React, {FC} from 'react';
import {Checkbox} from "antd";
import {CloseCircleTwoTone} from "@ant-design/icons";

type PropsType = {
    done: boolean
    name: string
    taskId: string
    listId: string
    setTaskComplete: (listId: string, taskId: string) => void
    deleteTask: (listId: string, taskId: string) => void
}
const TaskCard: FC<PropsType> = (props) => {
    const handleDeleteTask = () => {
        props.deleteTask(props.listId, props.taskId)
    }
    return (
        <div className='flex items-center col-span-1 text-justify w-full relative pr-6'>
            <Checkbox checked={props.done} onChange={() => {
                props.setTaskComplete(props.listId, props.taskId)
            }}>{props.name}</Checkbox>
            <CloseCircleTwoTone className='absolute top-1 right-0' onClick={handleDeleteTask}/>
        </div>
    );
}

export default TaskCard;

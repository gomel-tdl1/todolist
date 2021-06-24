import React, {ChangeEvent, FC, useState} from 'react';
import {connect} from 'react-redux';
import {
    addListThunk,
    addTask,
    AddTaskType,
    ListType,
    setTaskComplete,
    SetTaskCompleteType
} from '../../redux/todolist-reducer';
import TodolistCard from './TodolistCard';
import {AppStateType} from "../../redux/redux-store";
import {Alert, Button, Form, Input, Modal, Space} from "antd";

type MapStateToPropsType = {
    lists: ListType[]
    isLoading: boolean
}
type MapDispatchPropsType = {
    addTask: (description: string, taskId: string) => AddTaskType
    setTaskComplete: (listId: string, taskId: string) => SetTaskCompleteType
    addListThunk: (title: string, description: string) => void
}
type OwnPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchPropsType & OwnPropsType;

const Todolist: FC<PropsType> = React.memo((props) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [listTitle, setListTitle] = useState<string>('');
    const [listDescription, setListDescription] = useState<string>('');

    const addList = () => {
        setIsModalVisible(true);
    }
    const onModalCanceled = () => {
        setIsModalVisible(false);
    }
    const onModalConfirm = async () => {
        await props.addListThunk(listTitle, listDescription)
        setIsModalVisible(false);
    }

    return (
        <Space direction="vertical" className='w-full p-6'>
            <Button type={'primary'} block onClick={addList}>Create list</Button>
            <Modal title="Create list" visible={isModalVisible} onOk={onModalConfirm} onCancel={onModalCanceled}
                   confirmLoading={props.isLoading} okButtonProps={{disabled: (!listTitle || !listDescription)}}>
                <Form
                    name="addList"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input list title!',
                            },
                        ]}
                    >
                        <Input placeholder='Enter list title' value={listTitle}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                   setListTitle(e.target.value)
                               }}/>
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input list description!',
                            },
                        ]}
                    >
                        <Input placeholder='Enter list description' value={listDescription}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                   setListDescription(e.target.value)
                               }} className='mt-4'/>
                    </Form.Item>
                </Form>
            </Modal>
            <div className='grid grid-cols-3 gap-4'>
                {props.lists.length !== 0 &&
                props.lists.map((list, index) => <TodolistCard list={list} key={index}
                                                               addTask={props.addTask}
                                                               listId={list.id}
                                                               setTaskComplete={props.setTaskComplete}/>)}
            </div>
        </Space>

    );
})
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    lists: state.todolist.lists,
    isLoading: state.todolist.isLoading
});
export default connect<MapStateToPropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    addTask,
    setTaskComplete,
    addListThunk
})(Todolist);

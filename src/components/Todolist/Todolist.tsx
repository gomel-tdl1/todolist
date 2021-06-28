import React, {ChangeEvent, FC, useState} from 'react';
import {connect} from 'react-redux';
import {
    addListThunk,
    addTaskThunk,
    deleteListThunk,
    deleteTaskThunk,
    ListType,
    toggleCompleteTaskThunk
} from '../../redux/todolist-reducer';
import TodolistCard from './TodolistCard';
import {AppStateType} from "../../redux/redux-store";
import {Button, Form, Input, Modal, Space} from "antd";

type MapStateToPropsType = {
    lists: ListType[]
    isLoading: boolean
}
type MapDispatchPropsType = {
    addTaskThunk: (description: string, taskId: string) => void
    toggleCompleteTaskThunk: (listId: string, taskId: string) => void
    addListThunk: (title: string, description: string) => void
    deleteTaskThunk: (listId: string, taskId: string) => void
    deleteListThunk: (listId: string) => void
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
                   confirmLoading={props.isLoading} okButtonProps={{disabled: (!listTitle)}}>
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
                props.lists.map((list) => <TodolistCard list={list} key={list.id}
                                                        addTask={props.addTaskThunk}
                                                        listId={list.id}
                                                        setTaskComplete={props.toggleCompleteTaskThunk}
                                                        deleteTask={props.deleteTaskThunk}
                                                        deleteList={props.deleteListThunk}/>)}
            </div>
        </Space>

    );
})
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    lists: state.todolist.lists,
    isLoading: state.todolist.isLoading
});
export default connect<MapStateToPropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    addTaskThunk,
    toggleCompleteTaskThunk,
    addListThunk,
    deleteTaskThunk,
    deleteListThunk
})(Todolist);

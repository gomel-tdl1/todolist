import React, {FC} from 'react';
import {connect} from 'react-redux';
import {ListType} from '../../redux/todolist-reducer';
import TodolistCard from './TodolistCard';
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    lists: ListType[]
}
type MapDispatchPropsType = {}
type OwnPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchPropsType & OwnPropsType;

const Todolist: FC<PropsType> = React.memo((props) => {

    return (
        <div className='grid grid-cols-3 gap-4'>
            {props.lists.map((list, index) => <TodolistCard list={list} key={index}/>)}
        </div>
    );
})
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    lists: state.todolist.lists
});
export default connect<MapStateToPropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {})(Todolist);

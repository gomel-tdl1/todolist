import React, {FC, useEffect} from 'react';
import './App.less';
import Todolist from "./components/Todolist/Todolist";
import {connect, Provider} from "react-redux";
import store, {AppStateType} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Header as HeaderAnt} from 'antd/lib/layout/layout';
import Header from './components/Header/Header';
import {Layout, notification} from "antd";
import {Content} from "antd/es/layout/layout";
import {ErrorType} from "./redux/error-reducer";

type MapStateToPropsType = {
    error: ErrorType | null
}
type MapDispatchToPropsType = {}
type OwnPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

const App: FC<PropsType> = React.memo((props) => {

    useEffect(() => {
        if(props.error){
            notification.error({
                key: 'updatable',
                message: props.error.message,
                description: props.error.description,
            })
        }
    }, [props.error]);

    return (
        <div className="App">
            <Layout>
                <HeaderAnt>
                    <Header/>
                </HeaderAnt>
                <Content>
                    <Todolist/>
                </Content>
            </Layout>
        </div>
    );
})

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    error: state.error.error
})
const AppWithConnect = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(MapStateToProps, {})(App)

const MainApp = () => {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <AppWithConnect/>
                </Provider>
            </BrowserRouter>
        )
    }
;
export default MainApp;

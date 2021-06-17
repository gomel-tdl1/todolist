import React from 'react';
import './App.less';
import Todolist from "./components/Todolist/Todolist";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Header as HeaderAnt} from 'antd/lib/layout/layout';
import Header from './components/Header/Header';
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";

function App() {

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
}

const MainApp = () => {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        )
    }
;
export default MainApp;

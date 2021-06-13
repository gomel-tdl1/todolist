import React from 'react';
import './App.css';
import Todolist from "./components/Todolist/Todolist";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <Todolist/>
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
};
export default MainApp;

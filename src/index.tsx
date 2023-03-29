
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import  {StateType} from "./redux/store";
import {Provider} from "react-redux";
import store, {AppRootStateType} from "./redux/redux-store";






let rerender=(state:AppRootStateType)=>{
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
            <App />
        </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}

rerender(store.getState());

store.subscribe(()=>{
    let state=store.getState()
    rerender(state)})

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import  {StateType} from "./redux/store";
import {Provider} from "react-redux";
import store from "./redux/redux-store";






let rerender=(state:StateType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
        </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerender(store.getState());

store.subscribe(()=>{
    let state=store.getState()
    rerender(state)})
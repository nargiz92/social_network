import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from "./App";


ReactDOM.render(<MainApp/>, document.getElementById('root'))


// rerender(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState()
//     rerender(state)
//
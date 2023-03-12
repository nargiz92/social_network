import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {StateType, StoreType,} from "./redux/store";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MyPostContainer from "./components/Profile/MyPost/MyPostContainer";
//
// export type PropsType = {
//     state: StateType
//     store: StoreType
//
// }

function App() {
    return (
        <div className="app_wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile' render={() => <MyPostContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

                {/*<Route path={'/sidebar'} render={()=><Friends />}/>*/}
            </div>
        </div>
    );
}

export default App;

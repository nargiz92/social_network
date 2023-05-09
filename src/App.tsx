import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from "redux-form";
import Preloader from "./common/preloader/Preloader";
import {AppRootStateType} from "./redux/redux-store";
//
// export type PropsType = {
//     state: StateType
//     store: StoreType
//
// }

class App extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="app_wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>

                    {/*<Route path={'/sidebar'} render={()=><Friends />}/>*/}
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state:AppRootStateType)=>{
    initialized:state.app.initialized
}

export default compose(withRouter,
    connect(mapStateToProps,{getAuthUserData}))(App)

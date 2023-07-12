import React, {ComponentType} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
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
import Preloader from "./common/preloader/Preloader";
import {AppRootStateType} from "./redux/redux-store";
import {initilizeApp} from "./redux/app-reducer";

export type AppPropsType = {
    initilizeApp:()=>void
    initialized:boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initilizeApp()
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
const mapStateToProps=(state:AppRootStateType)=>({
    initialized:state.app.initialized
})

export default compose<ComponentType>(withRouter,
    connect(mapStateToProps,{initilizeApp}))(App)

import React, {ComponentType} from 'react';
import s from './App.module.scss'
import {Navbar} from "./components/Navbar/Navbar";
import {HashRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "./common/preloader/Preloader";
import {initilizeApp} from "./redux/app-reducer";
import {Provider} from "react-redux";
import store, {AppRootStateType} from "./redux/redux-store";
import withSuspense from "./HOC/withSuspense";

const DialogsContainer =React.lazy(()=>import('./components/Dialogs/Message/DialogsContainer'))
const ProfileContainer =React.lazy(()=>import('./components/Profile/ProfileContainer'))

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
            <div className={s.app_wrapper}>
                <div className={s.header}>
                    <HeaderContainer/>
                </div>
                <div className={s.nav}>
                    <Navbar/>
                </div>



                <div className={s.appWrapperContent}>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
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

const AppContainer= compose<ComponentType>(withRouter,
    connect(mapStateToProps,{initilizeApp}))(App)

const MainApp=(props:any)=>{
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}
export default MainApp;
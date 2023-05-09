import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./Profile_Page_reduser";
import dialogsPageReducer from "./Dialogs_Page_reduser";
import thunkMiddleWare from 'redux-thunk'
import {usersReducer} from "./Users-reducer";
import {authReducer} from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

export type AppRootStateType=ReturnType<typeof rootReducers>
let rootReducers=combineReducers({
    profilePages:profilePageReducer,
    dialogsPages:dialogsPageReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer,
    app:appReducer
})


export let store=createStore(rootReducers,applyMiddleware(thunkMiddleWare));
// @ts-ignore
window.store=store;

export default store;
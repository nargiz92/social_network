import {combineReducers, createStore} from "redux";
import profilePageReducer from "./Profile_Page_reduser";
import dialogsPageReducer from "./Dialogs_Page_reduser";
import SideBarReducer from "./SideBar_reduser";

import {usersReducer} from "./Users-reducer";
import {authReducer} from "./auth-reducer";


export type AppRootStateType=ReturnType<typeof rootReducers>
let rootReducers=combineReducers({
    profilePages:profilePageReducer,
    dialogsPages:dialogsPageReducer,
    usersPage:usersReducer,
    auth:authReducer
})


export let store=createStore(rootReducers);
// @ts-ignore
window.store=store;

export default store;
import {AppRootStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UsersType} from "./Users-reducer";

export const getUsersSelect=(state:AppRootStateType)=>{
return state.usersPage.users
}

export const getUsersSelector=createSelector(getUsersSelect,(users:UsersType[])=>{
    return users.filter(u=>true)
})
export const getPageSize=(state:AppRootStateType)=>{
    return state.usersPage.pageSize
}
export const getTotalUsers=(state:AppRootStateType)=>{
    return state.usersPage.totalUsers
}
export const getCurrentPage = (state:AppRootStateType) => {
  return state.usersPage.currentPage
}
export const getIsFetching = (state:AppRootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state:AppRootStateType) => {
    return state.usersPage.followingProgress
}

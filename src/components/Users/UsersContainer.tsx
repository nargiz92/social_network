
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, InitStateType, setUsersAC, unfollowAC, UsersType} from "../../redux/Users-reducer";
import Users from "./Users";



type mapStateToPropsType = {
    usersPage:InitStateType
}
type mapDispatchToPropsType = {
   follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:UsersType[])=>void
}
const mapStateToProps = (state:AppRootStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
export type UsersPropsType = mapDispatchToPropsType & mapStateToPropsType
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:UsersType[])=>{
            dispatch(setUsersAC(users))
        }

    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
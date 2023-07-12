import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfilyType, getUsersProfile, getStatus, updatedStatus} from "../../redux/Profile_Page_reduser";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId?: string
}
type mapStatePropsType = {
    profile: null | ProfilyType
    status: string
    autorizedUserId: number|null
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getUsersProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updatedStatus: (status: string) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = Number(this.props.autorizedUserId || '')
        }
        if (!userId) {
            this.props.history.push('/login')
        }
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return (

            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updatedStatus={this.props.updatedStatus}/>

        );
    }
}

let mapStateToProps = (state: AppRootStateType): mapStatePropsType => ({
    profile: state.profilePages.profile,
    status: state.profilePages.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getStatus, updatedStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
let AuthRedirectComponentHOC = WithAuthRedirect(ProfileContainer)




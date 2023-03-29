import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilyType, setUserProfile} from "../../redux/Profile_Page_reduser";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type mapStatePropsType = {
    profile: null|ProfilyType
}
type mapDispatchToPropsType = {
    setUserProfile: (profile:  null|ProfilyType) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {

                this.props.setUserProfile(response.data)
            })
    }

    render() {

        return (

            <Profile {...this.props} profile={this.props.profile}/>

        );
    }
}

let mapStateToProps = (state: AppRootStateType): mapStatePropsType => ({
    profile: state.profilePages.profile
})
let WithUrlContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlContainerComponent);
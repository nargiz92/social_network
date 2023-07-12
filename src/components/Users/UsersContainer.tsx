import {AppRootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getUsers,
    follow,
    setCurrentPage,
    toggleIsFollowingProgress, unfollow,
    UsersType
} from "../../redux/Users-reducer";

import React from "react";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";

import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsersSelector,
} from "../../redux/user-selector";


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage,pageSize }=this.props;
        this.props.getUsers(currentPage, pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize}=this.props;
        this.props.getUsers(pageNumber, pageSize)

    }

    render() {
        return (

            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsers={this.props.totalUsers}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       setCurrentPage={this.props.setCurrentPage}
                       isFetching={this.props.isFetching}
                       followingProgress={this.props.followingProgress}
                       getUsers={this.props.getUsers}
                />
            </div>
        );
    }
}

export type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsers: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: any
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}
export type UsersPropsType = mapDispatchToPropsType & mapStateToPropsType
export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            toggleIsFollowingProgress,
            getUsers
        }),
)(UsersContainer)


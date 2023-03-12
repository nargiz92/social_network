import React from 'react';
import s from './MyPost.module.css'
import { PostsType,} from "../../../redux/store";
import {addPostAC, updatedNewPostTextAC} from "../../../redux/Profile_Page_reduser";
import MyPost from "./MyPost";

import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapToMyPostContainerType = {
    posts: PostsType[]
    newPostText: string
}
type mapToMyDispatchType = {
    addPost: () => void
    onChangePost: (text: string) => void
}
export type MyPostType = mapToMyPostContainerType & mapToMyDispatchType
const mapToMyPostContainer = (state: AppRootStateType): mapToMyPostContainerType => {
    return {
        posts: state.profilePages.posts,
        newPostText: state.profilePages.newPostText
    }
}

const mapToMyDispatch = (dispatch: Dispatch): mapToMyDispatchType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onChangePost: (text: string) => {
            dispatch(updatedNewPostTextAC(text))
        }
    }

}
const MyPostContainer = connect(mapToMyPostContainer, mapToMyDispatch)(MyPost)
export default MyPostContainer;
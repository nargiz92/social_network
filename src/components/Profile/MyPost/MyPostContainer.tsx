import React from 'react';
import s from 'src/components/Profile/MyPost/MyPost.module.scss'
import { PostsType,} from "../../../redux/store";
import {addPostAC} from "../../../redux/Profile_Page_reduser";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapToMyPostContainerType = {
    posts: PostsType[]

}
type mapToMyDispatchType = {
    addPost: (newMyPostText:string) => void

}
export type MyPostType = mapToMyPostContainerType & mapToMyDispatchType
const mapToMyPostContainer = (state: AppRootStateType): mapToMyPostContainerType => {
    return {
        posts: state.profilePages.posts
    }
}

const mapToMyDispatch = (dispatch: Dispatch): mapToMyDispatchType => {
    return {
        addPost: (newMyPostText:string) => {
            dispatch(addPostAC(newMyPostText))
        },
    }

}
const MyPostContainer = connect(mapToMyPostContainer, mapToMyDispatch)(MyPost)
export default MyPostContainer;
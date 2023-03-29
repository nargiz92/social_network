import {ActionType, ProfilePagesType} from "./store";
import {message} from "antd";

export type AddPostType = {
    type: 'ADD-POST'
}
export type UpdatedNewPostTextType = {
    type: 'UPDATED-NEW-POST-TEXT',
    newText: string
}
export type setUserProfileACType = {
    type: 'SET_USER_PROFILE'
    profile: null|ProfilyType
}
export type ActionTypes = AddPostType | UpdatedNewPostTextType | setUserProfileACType
export const ADD_POST = 'ADD-POST'
export const UPDATED_NEW_POST_TEXT = 'UPDATED-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

type PostType = {
    id: number
    message: string
    likes: number
}
export type ProfilyType={
    aboutMe:string
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    contacts:{
        facebook:string
        github: string
        vk: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    },
    userId:string,
    photos:{
        small:string,
        large:string,
    }
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: null|ProfilyType
}
const initialState: ProfilePageType = {
    posts: [{id: 1, message: 'Hi, how are you?', likes: 5},
        {id: 2, message: 'Happy birthday', likes: 55},
        {id: 3, message: 'Yo', likes: 51},],
    newPostText: 'it-incubator',
    profile: {
        aboutMe:'I am the best',
        lookingForAJob: 'yes',
        lookingForAJobDescription: 'I know react, ts, redux, storybook, materialUi',
        fullName: 'Nargiz Tagaeva',
        contacts:{
            facebook:'Nargiz Tagaeva',
            github: 'nargiz92',
            vk: 'Nargiz Tagaeva',
            instagram: 'Nargiz Tagaeva',
            twitter: 'sdsd',
            website: 'myProfile',
            youtube: 'nTag92',
            mainLink: 'nTag92'
        },
        userId:'2',
        photos:{
            small:'',
            large:'',
        }
    }
}

const profilePageReducer = (state = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, newPostText: '', posts: [...state.posts, {id: 5, message: state.newPostText, likes: 0}]}
        }
        case UPDATED_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case UPDATED_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }

}


export const setUserProfile = (profile: null|ProfilyType): setUserProfileACType => {
    return {type: SET_USER_PROFILE, profile: profile}
}
export const addPostAC = (): AddPostType => ({type: ADD_POST})
export const updatedNewPostTextAC = (text: any): UpdatedNewPostTextType => ({
    type: UPDATED_NEW_POST_TEXT,
    newText: text
})


export default profilePageReducer;
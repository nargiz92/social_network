
import {Dispatch} from "redux";
import {profileApi, usersApi} from "../api/API";

export type AddPostType = {
    type: 'ADD-POST'
    newMyPostText:string
}

export type setUserProfileACType = {
    type: 'SET_USER_PROFILE'
    profile: null|ProfilyType
}
export type setStatusType = {
    type: 'SET_STATUS'
   status:string
}
export type ActionTypes = AddPostType | setUserProfileACType|setStatusType
export const ADD_POST = 'ADD-POST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'

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
    profile: null|ProfilyType
    status:string
}
const initialState: ProfilePageType = {
    posts: [{id: 1, message: 'Hi, how are you?', likes: 5},
        {id: 2, message: 'Happy birthday', likes: 55},
        {id: 3, message: 'Yo', likes: 51},],

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
    },
    status:''
}

const profilePageReducer = (state = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, posts: [...state.posts, {id: 5, message:action.newMyPostText, likes: 0}]}
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }

}


 const setUserProfile = (profile: null|ProfilyType): setUserProfileACType => {
    return {type: SET_USER_PROFILE, profile: profile}
}
const setStatus = (status: string): setStatusType => {
    return {type: SET_STATUS, status}
}
export const addPostAC = (newMyPostText:string): AddPostType => ({type: ADD_POST, newMyPostText})

export const getUsersProfile=(userId:number)=>(dispatch:Dispatch)=>{
    usersApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus=(userId:number)=>(dispatch:Dispatch)=>{
    profileApi.getStatus(userId)
        .then(response => {

            dispatch(setStatus(response.data))
        })
}

export const updatedStatus=(status:string)=>(dispatch:Dispatch)=>{
    profileApi.updatedStatus(status)
        .then(response => {
            if (response.data.resultCode===0){

            dispatch(setStatus(response.data))}
        })
}
export default profilePageReducer;
import {Dispatch} from "redux";
import {profileApi, usersApi} from "../api/API";
export type AddPostType = ReturnType<typeof addPostAC>
export type DeletePostType = ReturnType<typeof deletePostAC>
export type setUserProfileACType =ReturnType<typeof setUserProfile>
export type setStatusType = ReturnType<typeof setStatus>

export type ActionTypes = AddPostType | setUserProfileACType|setStatusType|DeletePostType
export const ADD_POST = 'ADD-POST'
export const DELETE_POST = 'DELETE_POST'
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
        case DELETE_POST:{
            return {...state,posts:state.posts.filter(p=>p.id!==action.postId)}
        }
        default:
            return state
    }

}


 const setUserProfile = (profile: null|ProfilyType) => {
    return {type: SET_USER_PROFILE, profile: profile}as const
}
export const setStatus = (status: string) => {
    return {type: SET_STATUS, status}as const
}
export const addPostAC = (newMyPostText:string)=> ({type: ADD_POST, newMyPostText}as const)
export const deletePostAC = (postId:number) => ({type: DELETE_POST, postId}as const)

export const getUsersProfile=(userId:number)=>async (dispatch:Dispatch)=>{
    const response= await usersApi.getProfile(userId)
            dispatch(setUserProfile(response.data))
}
export const getStatus=(userId:number)=>async (dispatch:Dispatch)=>{
    const response=await profileApi.getStatus(userId)
            dispatch(setStatus(response.data))
}

export const updatedStatus=(status:string)=>async (dispatch:Dispatch)=>{
   let response= await profileApi.updatedStatus(status)
            if (response.data.resultCode===0){
            dispatch(setStatus(response.data))}
}
export default profilePageReducer;
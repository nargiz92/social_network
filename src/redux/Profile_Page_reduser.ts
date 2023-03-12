import {ActionType, ProfilePagesType} from "./store";
import {message} from "antd";

export type AddPostType={
    type:'ADD-POST'
}
export type UpdatedNewPostTextType={
    type:'UPDATED-NEW-POST-TEXT',
    newText:string
}
export const ADD_POST = 'ADD-POST'
export const UPDATED_NEW_POST_TEXT = 'UPDATED-NEW-POST-TEXT'
const initialState: ProfilePagesType = {
    posts: [{id: 1, message: 'Hi, how are you?', likes: 5},
        {id: 2, message: 'Happy birthday', likes: 55},
        {id: 3, message: 'Yo', likes: 51},],
    newPostText: 'it-incubator',
}

const profilePageReducer=(state=initialState, action:ActionType):ProfilePagesType=>{
   switch (action.type){
       case ADD_POST:{
return {...state,newPostText:'',posts:[...state.posts,{id: 5, message: state.newPostText, likes: 0}]}
       }
       case UPDATED_NEW_POST_TEXT:{
           return {...state,newPostText:action.newText}
       }
       default:
           return state
   }

}


export const addPostAC = ():AddPostType => ({type: ADD_POST})
export const updatedNewPostTextAC = (text: any):UpdatedNewPostTextType => ({type: UPDATED_NEW_POST_TEXT, newText: text})


export default profilePageReducer;
import {ActionType, DialogsPagesType, } from "./store";

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
export const UPDATED_NEW_MESSAGE = 'UPDATED-NEW-MESSAGE'

export type AddNewMessageType = {
    type: 'ADD_NEW_MESSAGE'
}
export type UpdatedNewMessageType = {
    type: 'UPDATED-NEW-MESSAGE'
    body: string
}

const iniState:DialogsPagesType={
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 1, name: 'Sveta'},
            {id: 1, name: 'Andrey'},
            {id: 1, name: 'Ann'},
            {id: 1, name: 'Parviz'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Are you ok?'},
            {id: 3, message: 'What`s up?'},
            {id: 4, message: 'Nice'},
        ],
        newTextForMessage: 'What are you doing?'
    }


const dialogsPageReducer = (state=iniState, action: ActionType):DialogsPagesType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return {...state,newTextForMessage:'',messages:[...state.messages,{id: 5, message:state.newTextForMessage}]}

        }
        case UPDATED_NEW_MESSAGE: {
            return {...state,newTextForMessage:action.body}
        }
        default:
            return state
    }
}


export const addNewMessageTextAC = (): AddNewMessageType => ({type: ADD_NEW_MESSAGE})
export const updatedNewMessageAC = (body: any): UpdatedNewMessageType =>
    ({type: UPDATED_NEW_MESSAGE, body: body})

export default dialogsPageReducer;
import { DialogsPagesType, } from "./store";

export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'


export type sendNewMessageType = {
    type: 'SEND_NEW_MESSAGE'
    newMessageBody:string
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
        ]
    }


const dialogsPageReducer = (state=iniState, action: ActionType):DialogsPagesType => {
    switch (action.type) {
        case SEND_NEW_MESSAGE: {
            return {...state,messages:[...state.messages,{id: 5, message:action.newMessageBody}]}

        }

        default:
            return state
    }
}
type ActionType=sendNewMessageType

export const sendNewMessageTextAC = (newMessageBody:string): sendNewMessageType => ({type: SEND_NEW_MESSAGE,
    newMessageBody})


export default dialogsPageReducer;
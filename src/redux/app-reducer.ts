import {Dispatch} from "redux";
import {authAPI} from "../api/API";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";


export type InitPropsTypes = {
    initialized: boolean
}
export const InitState = {
    initialized: false
}
const SET_INITILIZED_SUCCSES = 'SET_INITILIZED_SUCCSES'


export const appReducer = (state = InitState, action: AllActionType): InitPropsTypes => {
    switch (action.type) {
        case SET_INITILIZED_SUCCSES: {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

type AllActionType = setInitilizedSuccsesType

type setInitilizedSuccsesType = ReturnType<typeof InitilizedSuccses>

export const InitilizedSuccses = () => {
    return {
        type: SET_INITILIZED_SUCCSES,
    } as const
}


export const initilizeApp = () => {
    return (dispatch: Dispatch) => {

        let promise = dispatch(getAuthUserData())
            Promise.all([promise])
                .then(()=>{
                    dispatch(InitilizedSuccses())
                })

    }
}



import {authAPI} from "../api/API";
import {stopSubmit} from "redux-form";
import {BaseThunkCreatorType} from "./redux-store";


export type DataAuthType = {
    userId: null | number
    login: string
    email: string
    isAuth: boolean
}

export const InitState: DataAuthType = {
    userId: null as null | number,
    login: '',
    email: '',
    isAuth: false
}
const SET_USER_DATA = 'social_network/SET_USER_DATA'


export const authReducer = (state = InitState, action: AllActionType): DataAuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

type AllActionType = SetUserDataType|StopSybmitType
type ThunkType = BaseThunkCreatorType<AllActionType>
type SetUserDataType = ReturnType<typeof setAuthUserData>
type StopSybmitType=ReturnType<typeof stopSubmit>
export const setAuthUserData = (userId: number|null, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const
}


export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null ,'', '', false))
    }
}


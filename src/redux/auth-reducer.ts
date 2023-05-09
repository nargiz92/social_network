import {Dispatch} from "redux";
import {authAPI} from "../api/API";
import {stopSubmit} from "redux-form";


export type DataAuthType = {
    userId: string | null
    login: string
    email: string
    isAuth: boolean
}
export type InitPropsTypes = {
    data: DataAuthType

}
export const InitState = {
    userId: '',
    login: '',
    email: '',
    isAuth: false
}
const SET_USER_DATA = 'SET_USER_DATA'


export const authReducer = (state = InitState, action: AllActionType): DataAuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

type AllActionType = setUserDataType

type setUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const
}


export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
      return   authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}


export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {


        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.message.length > 0 ? response.data.message[0] : 'Some Error'
                    dispatch(stopSubmit('login', {_error: message}))

                }
            })
    }
}
export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}
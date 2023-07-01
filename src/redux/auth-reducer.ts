
import {authAPI} from "../api/API";
import {stopSubmit} from "redux-form";
import {AppRootStateType, BaseThunkCreatorType} from "./redux-store";


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
    userId: null as null|string,
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
type ThunkType = BaseThunkCreatorType<AllActionType>
type setUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const
}


export const getAuthUserData = ():ThunkType => {
    return (dispatch) => {
      return   authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}



export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch) => {
       return authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.message.length > 0 ? response.data.message[0] : 'Some Error'
                    stopSubmit('login', {_error: message})

                }
            })
    }
}
export const logout = (): ThunkType => {
    return (dispatch) => {
        return authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData('', '', '', false))
                }
            })
    }
}


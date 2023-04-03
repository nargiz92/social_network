export type DataAuthType = {
    userId: null
    login: null
    email: null
    isAuth: boolean
}
export type InitPropsTypes = {
    data: DataAuthType

}
export const InitState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}
const SET_USER_DATA = 'SET_USER_DATA'


export const authReducer = (state = InitState, action: AllActionType): DataAuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

type AllActionType = setUserDataType

type setUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: null,
                                login: null,
                                email: null,) => {
    return {
        type: SET_USER_DATA,
        userId,login,email
    } as const
}
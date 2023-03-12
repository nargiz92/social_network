type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    photos: 'small'|'large'
    followed: boolean
    name: string
    status: string
    // location: LocationType
}
export type InitStateType = {
    users: UsersType[]
}
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const InitialState: InitStateType = {
    users: []

}
export const usersReducer = (state = InitialState, action: AllActionType): InitStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

type AllActionType = followACType | unfollowACType | setUsersACType
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
export const followAC = (userId: number) => {
    return {type: FOLLOW, userId} as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}

import {usersApi} from "../api/API";
import {Dispatch} from "redux";

type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    name: string
    status: string

}
export type InitStateType = {
    users: UsersType[]
    pageSize: number
    totalUsers: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'
const InitialState: InitStateType = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsers: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state, followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

type AllActionType = followACType | unfollowACType |
    setUsersACType | setCurrentPageACType |
    setTotalUsersCountACType | toggleIsFetchingACType | toggleIsFollowingProgressType

type followACType = ReturnType<typeof followSuccess>
type unfollowACType = ReturnType<typeof unfollowSuccess>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgress>


export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export const setTotalUsersCount = (totalUserCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUserCount
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage} as const
}
export const followSuccess = (userId: number) => {
    return {type: FOLLOW, userId} as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsers = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const getUsers=(page:number,pageSize:number)=>{
    return (dispatch:Dispatch)=>{
        dispatch(toggleIsFetching(true))
     dispatch(setCurrentPage(page))
        usersApi.getUsers(page,pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
               dispatch(setUsers(data.items))
              dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow=(userId:number)=>{
    return (dispatch:Dispatch)=>{
        dispatch(toggleIsFollowingProgress(true, userId))
        usersApi.followUsers(userId)
            .then(data => {

                if (data.resultCode ===0) {
                    dispatch(followSuccess(userId))
                }
             dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

export const unfollow=(userId:number)=>{
    return (dispatch:Dispatch)=>{
        dispatch(toggleIsFollowingProgress(true, userId))
        usersApi.unfollowUsers(userId)
            .then(data => {
                if (data.resultCode ===0) {
                 dispatch(unfollowSuccess(userId))
                }
              dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}


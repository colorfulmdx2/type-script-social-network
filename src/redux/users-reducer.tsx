import {usersAPI} from "../api/api";
import {type} from "os";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    followed: boolean
    name: string
    status: string
    location: LocationType
    photoUrl: string
    photos: any
}

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: string
}
type UnFollowSuccessActionType = {
    type: typeof UN_FOLLOW
    userId: string
}
type SetUsersActionType = {
    type: typeof SET_USERS
    users: UsersType
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetUsersTotalCountActionType = {
    type: typeof SET_TOTAL_USERS
    count: number
}
type SetIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: string
}

export type UsersReducerActionsType =
    FollowSuccessActionType
    | UnFollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | SetIsFetchingActionType
    | ToggleFollowingProgressActionType

let initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}


type InitStateType = typeof initialState

const usersReducer = (state: InitStateType = initialState, action: any): InitStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map((u: UsersType) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })]
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: [...state.users.map((u: UsersType) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })]
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter((id: number) => id !== action.userId)]
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId: string): UsersReducerActionsType => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId: string): UsersReducerActionsType => ({type: UN_FOLLOW, userId})
export const setUsers = (users: UsersType): UsersReducerActionsType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): UsersReducerActionsType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount: number): UsersReducerActionsType => ({type: SET_TOTAL_USERS, count: totalUsersCount})
export const setIsFetching = (isFetching: boolean): UsersReducerActionsType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: string): UsersReducerActionsType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, UsersReducerActionsType >
export const getUsers = (currentPage: number, pageSize: number):ThunkActionType => {
    //types
    return async (dispatch) => {
        dispatch(setIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then((data: any) => {

            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}

export const follow = (userId: string) => {
            //types
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            //types
            .then((data: any) => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unFollow = (userId: any) => {
            //types
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unFollow(userId)
            //types
            .then((data: any) => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export default usersReducer
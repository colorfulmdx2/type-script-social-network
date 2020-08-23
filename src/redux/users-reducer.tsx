import {usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";

//----------------------------------------------------------------------------------------------------------------------

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

//----------------------------------------------------------------------------------------------------------------------

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: LocationType
    photoUrl: string
    photos: any
}

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}

type UnFollowSuccessActionType = {
    type: typeof UN_FOLLOW
    userId: number
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: UsersType[]
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
    userId: number
}

export type UsersReducerActionsType =
    FollowSuccessActionType
    | UnFollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | SetIsFetchingActionType
    | ToggleFollowingProgressActionType

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, UsersReducerActionsType>

type InitStateType = typeof initialState

//----------------------------------------------------------------------------------------------------------------------

let initialState = {
    users: [] as UsersType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}

//----------------------------------------------------------------------------------------------------------------------

const usersReducer = (state: InitStateType = initialState, action: UsersReducerActionsType): InitStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [
                   // updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                    ...state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })]
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: [
                    //updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                    ...state.users.map((u) => {
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
                    : state.followingInProgress.filter((id: number) => id !== action.userId)
            }
        }
        default:
            return state
    }
}

//----------------------------------------------------------------------------------------------------------------------

export const followSuccess = (userId: number): UsersReducerActionsType => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId: number): UsersReducerActionsType => ({type: UN_FOLLOW, userId})
export const setUsers = (users: UsersType[]): UsersReducerActionsType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): UsersReducerActionsType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount: number): UsersReducerActionsType => ({
    type: SET_TOTAL_USERS,
    count: totalUsersCount
})
export const setIsFetching = (isFetching: boolean): UsersReducerActionsType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): UsersReducerActionsType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

//----------------------------------------------------------------------------------------------------------------------

export const getUsers = (page: number, pageSize: number): ThunkActionType => async (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(page))

    let data = await usersAPI.getUsers(page, pageSize)

    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))

}


export const follow = (userId: number): ThunkActionType => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}


export const unFollow = (userId: any): ThunkActionType => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)
}

const followUnfollowFlow = async (dispatch: Dispatch, userId:number, apiMethod:any, actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(toggleFollowingProgress(false, userId))
}

//----------------------------------------------------------------------------------------------------------------------

export default usersReducer
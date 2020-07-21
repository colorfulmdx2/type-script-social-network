import {usersAPI} from "../api/api";

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

let initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}


type InitStateType = typeof initialState

const usersReducer = (state: InitStateType = initialState, action:any): InitStateType => {
    switch (action.type) {
        case FOLLOW:
            debugger
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
            debugger
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
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter((id:number) => id!== action.userId)]
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId: string) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: string) => ({type: UN_FOLLOW, userId})
export const setUsers = (users: UsersType) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS, count: totalUsersCount})
export const setIsFetching = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching:boolean, userId:any) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then((data: any) => {

            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}

export const follow = (userId: any) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then((data: any) => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unFollow = (userId: any) => {

    return (dispatch: any) => {
       dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unFollow(userId)
            .then((data: any) => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export default usersReducer
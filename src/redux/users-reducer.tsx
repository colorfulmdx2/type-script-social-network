const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

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
    isFetching: true
}


type InitStateType = typeof initialState

const usersReducer = (state: InitStateType = initialState, action:any): InitStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: UsersType) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map((u: UsersType) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
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
        default:
            return state
    }
}

export const follow = (userId: string) => ({type: FOLLOW, userId})
export const unFollow = (userId: string) => ({type: UN_FOLLOW, userId})
export const setUsers = (users: UsersType) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS, count: totalUsersCount})
export const setIsFetching = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer
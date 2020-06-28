const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET_USERS'

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
    users: []
}

const usersReducer = (state:any = initialState, action:any) => {
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: any) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: any) => ({type: UN_FOLLOW, userId})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})


export default usersReducer
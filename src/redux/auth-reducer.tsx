import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    data: DataType
}
type AuthUserDataActionType = SetAuthUserDataActionType


type InitStateType = typeof initialState

const authReducer = (state: InitStateType = initialState, action: any): InitStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: true
            }
        default:
            return state
    }
}

type DataType = {
    userId: number
    email: string
    login: string
}

export const setAuthUserData = (userId: number, email: string, login: string): AuthUserDataActionType => (
    {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
)

export const getAuthUserData = () => (dispatch: any) => {
            //type
    authAPI.me()
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

export default authReducer
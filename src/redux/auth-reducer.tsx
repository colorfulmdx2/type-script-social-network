import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

//----------------------------------------------------------------------------------------------------------------------

type DataType = {
    userId: number
    email: string
    login: string
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    data: DataType
}

type AuthUserDataActionType = SetAuthUserDataActionType

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, AuthUserDataActionType>

type InitStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

//----------------------------------------------------------------------------------------------------------------------

const authReducer = (state: InitStateType = initialState, action: SetAuthUserDataActionType): InitStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: true
            }
        default:
            return state
    }
}

//----------------------------------------------------------------------------------------------------------------------

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

//----------------------------------------------------------------------------------------------------------------------

export const getAuthUserData = ():ThunkActionType => async (dispatch) => {
    return (
        authAPI.me()
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    )
}

//----------------------------------------------------------------------------------------------------------------------

export default authReducer
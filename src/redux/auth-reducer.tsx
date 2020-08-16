import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

//----------------------------------------------------------------------------------------------------------------------

type PayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: PayloadType

}

type AuthUserDataActionType = SetAuthUserDataActionType

export type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, AuthUserDataActionType | FormAction>

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
                ...state, ...action.payload
            }
        default:
            return state
    }
}

//----------------------------------------------------------------------------------------------------------------------

export const setAuthUserData = (id: number | null , email: string  | null, login: string  | null, isAuth: boolean): AuthUserDataActionType => (
    {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
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
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
            .catch( (err)=> {
            } )
    )
}

export const login = (email: string, password: string, rememberMe: boolean):ThunkActionType => async (dispatch) => {

    return (
        authAPI.login(email, password, rememberMe)
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                   dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0
                        ? response.data.messages[0]
                        : 'Some Error'

                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    )
}

export const logout = ():ThunkActionType => async (dispatch) => {
    return (
        authAPI.logout()
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    )
}

//----------------------------------------------------------------------------------------------------------------------

export default authReducer
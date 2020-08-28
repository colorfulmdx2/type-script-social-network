import {authAPI, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, captcha is not required
}

//----------------------------------------------------------------------------------------------------------------------

type PayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl?: null | string
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: PayloadType
}

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: any
}

type AuthUserDataActionType = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType

export type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, AuthUserDataActionType | FormAction>

type InitStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}

//----------------------------------------------------------------------------------------------------------------------

const authReducer = (state: InitStateType = initialState, action: AuthUserDataActionType): InitStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}

//----------------------------------------------------------------------------------------------------------------------

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): AuthUserDataActionType => (
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

export const getCaptchaUrlSuccess = (captchaUrl:string) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

//----------------------------------------------------------------------------------------------------------------------

export const getAuthUserData = (): ThunkActionType => async (dispatch) => {

    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
//     return (
//         authAPI.me()
//             .then((response: any) => {
//                 if (response.data.resultCode === 0) {
//                     let {id, email, login} = response.data.data
//                     dispatch(setAuthUserData(id, email, login, true))
//                 }
//             })
//             .catch( (err)=> {
//             } )
//     )
}

export const login = (email: string, password: string, rememberMe: boolean, captcha:string): ThunkActionType => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : 'Some Error'

        dispatch(stopSubmit('login', {_error: message}))
    }

    // return (
    //     authAPI.login(email, password, rememberMe)
    //         .then((response: any) => {
    //             if (response.data.resultCode === 0) {
    //                dispatch(getAuthUserData())
    //             } else {
    //                 let message = response.data.messages.length > 0
    //                     ? response.data.messages[0]
    //                     : 'Some Error'
    //
    //                 dispatch(stopSubmit('login', {_error: message}))
    //             }
    //         })
    // )
}
export const getCaptchaUrl = (): ThunkActionType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const dataUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(dataUrl))
}

export const logout = (): ThunkActionType => async (dispatch) => {

    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

    // return (
    //     authAPI.logout()
    //         .then((response: any) => {
    //             if (response.data.resultCode === 0) {
    //                 dispatch(setAuthUserData(null, null, null, false))
    //             }
    //         })
    // )
}

//----------------------------------------------------------------------------------------------------------------------

export default authReducer
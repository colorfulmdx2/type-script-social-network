import {profileAPI, usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

//----------------------------------------------------------------------------------------------------------------------

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

//----------------------------------------------------------------------------------------------------------------------
type ProfileType = {
    id: number
    name: string
    status: string
}

type AddPostType = {
    type: typeof ADD_POST
}

type UpdateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newText: string
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: any
}

type SetStatusProfileType = {
    type: typeof SET_STATUS
    status: string
}

type ProfileReducerActionsType = AddPostType | UpdateNewPostTextType | SetUserProfileType | SetStatusProfileType

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileReducerActionsType>

type InitStateType = typeof initialState

//----------------------------------------------------------------------------------------------------------------------

let initialState = {
    postData: [
        {id: 1, like: '12', message: 'Hello world'},
        {id: 2, like: '16', message: 'Learning React....'},
        {id: 3, like: '19', message: 'Fucked up...'}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

//----------------------------------------------------------------------------------------------------------------------

const profileReducer = (state: InitStateType = initialState, action: ProfileReducerActionsType): InitStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                like: '0'
            }
            return {...state, newPostText: '', postData: [newPost, ...state.postData]}
        case UPDATE_NEW_POST_TEXT :
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

//----------------------------------------------------------------------------------------------------------------------

export const addPost = ():ProfileReducerActionsType => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostText = (text: string):ProfileReducerActionsType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = (profile: ProfileType):ProfileReducerActionsType => {
    return ({
        type: SET_USER_PROFILE, profile
    })
}
export const setStatus = (status: string):ProfileReducerActionsType => ({type: SET_STATUS, status})

//----------------------------------------------------------------------------------------------------------------------

export const getUserProfile = (userId: number):ThunkActionType => async (dispatch) => {
    return (
        usersAPI.getProfile(userId)
            .then((response: any) => {
                dispatch(setUserProfile(response.data))
            })
    )
}

export const getStatus = (userId: number):ThunkActionType => async (dispatch) => {
    return  (
        profileAPI.getStatus(userId)
            .then((response: any) => {
                dispatch(setStatus(response.data))
            })
    )
}
export const updateStatus = (status: string):ThunkActionType => async (dispatch) => {
    return (
        profileAPI.updateStatus(status)
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    )
}

export default profileReducer
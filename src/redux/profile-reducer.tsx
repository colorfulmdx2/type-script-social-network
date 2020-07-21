import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData: [
        {id: 1, like: '12', message: 'Hello world'},
        {id: 2, like: '16', message: 'Learning React....'},
        {id: 3, like: '19', message: 'Fucked up...'}
    ],
    newPostText: '',
    profile: null
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

type ProfileReducerActionsType = AddPostType | UpdateNewPostTextType | SetUserProfileType

type InitStateType = typeof initialState

const profileReducer = (state: InitStateType = initialState, action:any): InitStateType => {
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
        default:
            return state
    }
}


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
const setUserProfile = (profile: any):ProfileReducerActionsType => {
    return ({
        type: SET_USER_PROFILE, profile
    })
}

export const getUserProfile = (userId: any) => (dispatch: any) => {
    return  (
        usersAPI.getProfile(userId)
            .then((response: any) => {
                dispatch(setUserProfile(response.data))
            })
    )
}

export default profileReducer
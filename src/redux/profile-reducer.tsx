import {profileAPI, usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";
import {UsersType} from "./users-reducer";

//----------------------------------------------------------------------------------------------------------------------

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const PHOTO_SUCCESS = 'PHOTO_SUCCESS'

//----------------------------------------------------------------------------------------------------------------------
type ProfileType = {
    id: number
    name: string
    status: string
}

type AddPostType = {
    type: typeof ADD_POST
    postBody: string

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

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
type PhotoSuccessActionType = {
    type: typeof PHOTO_SUCCESS
    photos: PhotoType
}

type SetFriendsType = ReturnType<typeof setFriends>
type SetOnlineFriendsType = ReturnType<typeof setOnlineFriends>
type setMyProfileType = ReturnType<typeof setMyProfile>

type ProfileReducerActionsType = AddPostType
    | UpdateNewPostTextType
    | SetUserProfileType
    | SetStatusProfileType
    | DeletePostActionType
    | PhotoSuccessActionType
    | SetFriendsType
    | SetOnlineFriendsType
| setMyProfileType


type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileReducerActionsType | FormAction>

type InitStateType = typeof initialState

//----------------------------------------------------------------------------------------------------------------------
export type PhotoType = {
    small: string | null,
    large: string | null
}
export type ProfileFullType = {
    photos: PhotoType,
    aboutMe: string
    userId: number     //required(integer)
    lookingForAJob: boolean     //required(boolean)
    lookingForAJobDescription: string     //required(string)
    fullName: string    //required(string)
    contacts: {
        github: string    //required(string)
        vk: string     //required(string)
        facebook: string     //required(string)
        instagram: string     //required(string)
        twitter: string    //required(string)
        website: string    //required(string)
        youtube: string     //required(string)
        mainLink: string
    }    //required(object)
    //required(string)
}

let initialState = {
    postData: [
        {id: 1, like: '12', message: 'Hello world'},
        {id: 2, like: '16', message: 'Learning React....'},
        {id: 3, like: '19', message: 'Fucked up...'}
    ],
    profile: null as ProfileFullType | null,
    myProfile: null as ProfileFullType | null,
    status: '',
    friends: [] as UsersType[],
    onlineFriends: [] as UsersType[]
}

//----------------------------------------------------------------------------------------------------------------------

const profileReducer = (state: InitStateType = initialState, action: ProfileReducerActionsType): InitStateType => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.postBody,
                like: '0'
            }
            return {...state, postData: [newPost, ...state.postData]}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case "SET_MY_PROFILE":
            return {...state, myProfile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case "DELETE_POST":
            return {...state, postData: state.postData.filter(p => p.id !== action.postId)}
        case "PHOTO_SUCCESS":
            return {...state, profile: state.profile && {...state.profile, photos: action.photos}}
        case "SET_FRIENDS":
            return {...state, friends: action.value}
        case "SET_ONLINE_FRIENDS":
            return {...state, onlineFriends: action.value}
        default:
            return state
    }
}

//----------------------------------------------------------------------------------------------------------------------

export const addPost = (postBody: string): ProfileReducerActionsType => {
    return {
        type: ADD_POST,
        postBody
    }
}
export const updateNewPostText = (text: string): ProfileReducerActionsType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = (profile: ProfileFullType): ProfileReducerActionsType => {
    return ({
        type: SET_USER_PROFILE, profile
    })
}

export const setMyProfile = (profile: ProfileFullType) => ({type: 'SET_MY_PROFILE', profile} as const)

export const setStatus = (status: string): ProfileReducerActionsType => ({type: SET_STATUS, status})

export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos: PhotoType): PhotoSuccessActionType => ({type: PHOTO_SUCCESS, photos})

export const setFriends = (value: UsersType[]) => ({type: 'SET_FRIENDS', value} as const)
export const setOnlineFriends = (value: UsersType[]) => ({type: 'SET_ONLINE_FRIENDS', value} as const)
//----------------------------------------------------------------------------------------------------------------------

export const getUserProfile = (userId: number | null): ThunkActionType => async (dispatch) => {

    let response = await usersAPI.getProfile(userId)

    dispatch(setUserProfile(response.data))

}

export const getMyProfile = (): ThunkActionType => async (dispatch) => {

    let response = await usersAPI.getProfile(8850)

    dispatch(setMyProfile(response.data))

}

export const getStatus = (id: number): ThunkActionType => async (dispatch) => {

    let response = await profileAPI.getStatus(id)

    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string): ThunkActionType => async (dispatch) => {

    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any): ThunkActionType => async (dispatch) => {

    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: any): ThunkActionType => async (dispatch, getState) => {
    const id = getState().auth.id

    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(id))
    } else {
        console.log(response.data.messages[0])
        /*dispatch(stopSubmit('edit-a3-profile', {_error: response.data.messages[0]}))
        //{'contacts':{'facebook': response.data.a4-messages[0]} }
        return Promise.reject(response.data.messages[0])*/
    }
}

export const getFriends = (): ThunkActionType => async (dispatch, getState) => {

    try {
        const friends = await usersAPI.getFriends()
        const onlineFriends = await usersAPI.getOnlineFriends()


        dispatch(setFriends(friends))
        dispatch(setOnlineFriends(onlineFriends))

    } catch (error) {
        console.log(error)
    }


}

export default profileReducer
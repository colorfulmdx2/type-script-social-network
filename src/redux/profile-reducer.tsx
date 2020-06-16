const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    postData: [
        {id: 1, like: '12', message: 'Hello world'},
        {id: 2, like: '16', message: 'Learning React....'},
        {id: 3, like: '19', message: 'Fucked up...'}
    ],
    newPostText: ''
}

const profileReducer = (state:any = initialState, action:any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                like: '0'
            }
            state.postData.unshift(newPost)
            state.newPostText = '' // don't work
            return state
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default profileReducer
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
    _state: {
        navigationPage: {
            friendIconData: [
                {name: 'Dima'},
                {name: 'Kate'},
                {name: 'Mario'}
            ]
        },
        profilePage: {
            postData: [
                {id: 1, like: '12', message: 'Hello world'},
                {id: 2, like: '16', message: 'Learning React....'},
                {id: 3, like: '19', message: 'Fucked up...'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messagesData: [
                {id: 1, messages: 'Holla'},
                {id: 2, messages: 'Im Lolaaaaaa!!'},
                {id: 3, messages: 'Im a pirate QUEEN!!'},
                {id: 4, messages: 'Joking...)!!'},
            ],
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Kate'},
                {id: 3, name: 'Mario'},
                {id: 4, name: 'Jovanni'},
                {id: 5, name: 'Franchesco'},
                {id: 6, name: 'Karin'},
            ]
        },
    },
    _callSubscriber (state:any)  {
        console.log('State has been changed')
    },
    getState () {
        return this._state
    },
    subscriber  (observer:any)  {
        this._callSubscriber = observer
    },
    dispatch (action:any) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                like: '0'
            }
            this._state.profilePage.postData.unshift(newPost)
            this._state.profilePage.newPostText = '' // don't work
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
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
        newText: text}
}






export default store
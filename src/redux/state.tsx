import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navigationReducer from "./navigation-reducer";


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
            ],
            newMessageBody: ''
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navigationPage = navigationReducer(this._state.navigationPage, action)

        this._callSubscriber(this._state)

    }
}


export default store
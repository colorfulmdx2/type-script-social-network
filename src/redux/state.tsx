
import {rerenderEntireTree} from "../render";


let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        like: '0'
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText:any) => {
       state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export default state
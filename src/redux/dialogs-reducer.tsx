import profileReducer from "./profile-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state:any = initialState, action:any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return {...state}
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {...state, newMessageBody: '', messagesData: [...state.messagesData, {id: 6, messages: body}]}
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body:string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer
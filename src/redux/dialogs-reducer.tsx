//----------------------------------------------------------------------------------------------------------------------
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

//----------------------------------------------------------------------------------------------------------------------

type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE
}

type UpdateNewMessageBodyCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

type DialogReducerActionsType = SendMessageCreatorType | UpdateNewMessageBodyCreatorType

type InitStateType = typeof initialState

//----------------------------------------------------------------------------------------------------------------------

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

//----------------------------------------------------------------------------------------------------------------------

const dialogsReducer = (state:InitStateType = initialState, action:DialogReducerActionsType): InitStateType => {
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

//----------------------------------------------------------------------------------------------------------------------

export const sendMessageCreator = (): DialogReducerActionsType => ({type: SEND_MESSAGE})
export const updateNewMessageBody = (body:string): DialogReducerActionsType => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

//----------------------------------------------------------------------------------------------------------------------

export default dialogsReducer
//----------------------------------------------------------------------------------------------------------------------

const SEND_MESSAGE = 'SEND_MESSAGE'

//----------------------------------------------------------------------------------------------------------------------

type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE
    messageBody: string
}

type DialogReducerActionsType = SendMessageCreatorType

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
}

//----------------------------------------------------------------------------------------------------------------------

const dialogsReducer = (state:InitStateType = initialState, action:DialogReducerActionsType): InitStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.messageBody
            return {...state, messagesData: [...state.messagesData, {id: 6, messages: body}]}
        default:
            return state
    }
}

//----------------------------------------------------------------------------------------------------------------------

export const sendMessageCreator = (messageBody:string): DialogReducerActionsType => ({type: SEND_MESSAGE, messageBody})

//----------------------------------------------------------------------------------------------------------------------

export default dialogsReducer
import dialogsReducer, {sendMessageCreator, updateNewMessageBody} from "./dialogs-reducer";

test('send message', () => {

    const startState: any = {
        messagesData: [
            {id: 1, messages: 'Holla'},
            {id: 2, messages: 'Im Lolaaaaaa!!'},
            {id: 3, messages: 'Im a pirate QUEEN!!'},
            {id: 4, messages: 'Joking...)!!'},
        ],
        newMessageBody: ''
    }
    const action = sendMessageCreator();

    const endState = dialogsReducer(startState, action)


    expect(endState.messagesData.length).toBe(5);
});

test('update new message body', () => {

    const startState: any = {
        newMessageBody: ''
    }
    const action = updateNewMessageBody('xxx');

    const endState = dialogsReducer(startState, action)


    expect(endState.newMessageBody).toBe('xxx');
});
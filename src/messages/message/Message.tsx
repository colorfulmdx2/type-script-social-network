import React from 'react';
import styleDialogs from './Message.module.css'
import SingleMessage from "./single-message/SingleMessage";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";




const Message = (props: any) => {
    let state = props.store.getState().dialogsPage
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e:any) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    let newMessageBody = state.newMessageBody

    let singleMessageElement = props.messagesData.map((message: { messages: string; }) => <SingleMessage text={message.messages}/> )
    return (
        <div className={styleDialogs.messages}>
            <div>{singleMessageElement}</div>
            <div>
                <div>
                    <textarea value={newMessageBody}
                               placeholder={'Enter your message'}
                               onChange={onNewMessageChange}
                >

                    </textarea>
                </div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>


        </div>
    )
}

export default Message;
import React from 'react';
import styleDialogs from './Message.module.css'
import SingleMessage from "./single-message/SingleMessage";





const Message = (props: any) => {
    let singleMessageElement = props.messagesData.map((message: { messages: string; }) =>
        <SingleMessage text={message.messages}/>)
    return (
        <div className={styleDialogs.messages}>
            <div>{singleMessageElement}</div>
            <div>
                <div>
                    <textarea value={props.newMessageBody}
                               placeholder={'Enter your message'}
                               onChange={props.onNewMessageChange}
                >

                    </textarea>
                </div>
                <div><button onClick={props.onSendMessageClick}>Send</button></div>
            </div>


        </div>
    )
}

export default Message;
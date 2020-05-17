import React from 'react';
import styleDialogs from './Message.module.css'
import SingleMessage from "./single-message/SingleMessage";


const Message = (props: any) => {


    let singleMessageElement = props.messagesData.map((message: { messages: string; }) => <SingleMessage text={message.messages}/> )
    return (
        <div className={styleDialogs.messages}>
            {singleMessageElement}
        </div>
    )
}

export default Message;
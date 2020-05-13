import React from 'react';
import styleDialogs from './Message.module.css'
import SingleMessage from "./single-message/SingleMessage";


const Message = () => {

    let messagesData = [
        {id: 1, messages: 'Holla'},
        {id: 2, messages: 'Im Lolaaaaaa!!'},
        {id: 3, messages: 'Im a pirate QUEEN!!'},
        {id: 4, messages: 'Joking...)!!'},

    ]
    let singleMessageElement = messagesData.map(message => <SingleMessage text={message.messages}/> )
    return (
        <div className={styleDialogs.messages}>
            {singleMessageElement}
        </div>
    )
}

export default Message;
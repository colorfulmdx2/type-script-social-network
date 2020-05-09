import React from 'react';
import styleDialogs from './Messages.module.css'
import Dialogs from "./dialogs/Dialogs";
import Message from "./message/Message";

const Messages = () => {
    return (
        <div className={styleDialogs.messages}>
            <Dialogs/>
            <Message/>
        </div>
    )
}

export default Messages;
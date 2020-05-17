import React from 'react';
import styleDialogs from './Messages.module.css'
import Dialogs from "./dialogs/Dialogs";
import Message from "./message/Message";

const Messages = (props: any) => {
    return (
        <div className={styleDialogs.messages}>
            <Dialogs dialogsData={props.dialogsData}/>
            <Message messagesData={props.messagesData}/>
        </div>
    )
}

export default Messages;
import React from 'react';
import styleDialogs from './Messages.module.css'
import Dialogs from "./dialogs/Dialogs";
import Message from "./message/Message";
import SingleDialog from "./dialogs/single-dialog/SingleDialog";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";
import SingleMessage from "./message/single-message/SingleMessage";


import MessageContainer from "./message/MessageContainer";
import DialogsContainer from "./dialogs/DialogsContainer";

const Messages = (props:any) => {
   return (
       <div>
           <DialogsContainer />
           <MessageContainer/>
       </div>
   )
}


export default Messages;
/*
return (
    <StoreContext.Consumer>
        { store => {
            let state = store.getState().dialogsReducer

            let dialogElement = state.dialogsData.map((dialog: { id: number; name: string; }) =>
                <SingleDialog id={dialog.id} name={dialog.name}/>)



            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            let onNewMessageChange = (e: any) => {
                let body = e.target.value
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            let newMessageBody = state.newMessageBody



            let singleMessageElement = state.messagesData.map((message: { messages: string; }) =>
                <SingleMessage text={message.messages}/>)
            return (
                <div className={styleDialogs.messages}>
                    <Dialogs dialogsElement={dialogElement}/>
                    <Message onSendMessageClick={onSendMessageClick}
                             onNewMessageChange={onNewMessageChange}
                             newMessageBody={newMessageBody}
                             singleMessageElement={singleMessageElement}
                    />
                </div>
            )
        }
        }
    </StoreContext.Consumer>

)*/

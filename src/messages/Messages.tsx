import React from 'react';
import styleDialogs from './Messages.module.css'
import Dialogs from "./dialogs/Dialogs";
import Message from "./message/Message";
import SingleDialog from "./dialogs/single-dialog/SingleDialog";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";
import SingleMessage from "./message/single-message/SingleMessage";
import StoreContext from "../store-context";

const Messages = () => {

    // let dialogElement = props.state.dialogsReducer.dialogsData.map((dialog: { id: number; name: string; }) =>
    //     <SingleDialog id={dialog.id} name={dialog.name}/>)
    //
    // let state = props.store.getState().dialogsReducer
    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator())
    // }
    // let onNewMessageChange = (e: any) => {
    //     let body = e.target.value
    //     props.store.dispatch(updateNewMessageBodyCreator(body))
    // }
    // let newMessageBody = state.newMessageBody
    //
    // let singleMessageElement = props.state.dialogsReducer.messagesData.map((message: { messages: string; }) =>
    //     <SingleMessage text={message.messages}/>)

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
                        <Dialogs dialogElement={dialogElement}/>
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

    )
}

export default Messages;
import React, {ChangeEvent} from 'react';
import {connect} from "react-redux";
import Message from "./Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";






let mapStateToProps = (state:AppStateType) => {
    return {
        messagesData: state.dialogsState.messagesData,
        newMessageBody: state.dialogsState.newMessageBody
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onNewMessageChange: (e: ChangeEvent<HTMLInputElement>) => {
            let body = e.target.value
            dispatch(updateNewMessageBodyCreator(body))
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Message);


import React from 'react';
import {connect} from "react-redux";
import Message from "./Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";






let mapStateToProps = (state:any) => {
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
        onNewMessageChange: (e: any) => {
            let body = e.target.value
            dispatch(updateNewMessageBodyCreator(body))
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Message);


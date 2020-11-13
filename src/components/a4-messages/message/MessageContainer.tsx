import React, {ChangeEvent} from 'react';
import {connect} from "react-redux";
import {Message} from "./Message";
import {sendMessageCreator} from "../../../redux/dialogs-reducer";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state:AppStateType) => {
    return {
        messagesData: state.dialogsState.messagesData,
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        onSendMessageClick: (messageBody: string) => {
            dispatch(sendMessageCreator(messageBody))
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Message);


import React from 'react';
import styleSingleMessage from './SingleMessage.module.css'

type SingleMessageType = {
    text: string
}
const SingleMessage = (props: SingleMessageType) => {
    return (
        <div className={styleSingleMessage.message}>{props.text}</div>
        /*<div className={styleDialogs.messages}>
            <div className={styleDialogs.message}>hi how are you</div>
            <div className={styleDialogs.message}>ha al madonna</div>
            <div className={styleDialogs.message}>Are u gonna work tomorrow</div>
            <div className={styleDialogs.message}>Where is the money LebovskiWhere is the money LebovskiWhere is the money LebovskiWhere is the money Lebovski</div>
        </div>*/
    )
}

export default SingleMessage;
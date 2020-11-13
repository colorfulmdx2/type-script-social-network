import React from 'react';
import styleSingleMessage from './SingleMessage.module.scss'

type SingleMessageType = {
    text: string
}
const SingleMessage = (props: SingleMessageType) => {
    return (
        <div className={styleSingleMessage.message}>{props.text}</div>
    )
}

export default SingleMessage;
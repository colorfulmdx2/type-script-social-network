import React from 'react';
import styleDialogs from './Message.module.css'
import SingleMessage from "./single-message/SingleMessage";


const Message = () => {
    return (
        <div className={styleDialogs.messages}>
            <SingleMessage text={'Holla!!'}/>
            <SingleMessage text={'Im Lolaaaaaa!!'}/>
            <SingleMessage text={'Im a pirate QUEEN!!'}/>
            <SingleMessage text={'Joking...)!!'}/>
        </div>
    )
}

export default Message;
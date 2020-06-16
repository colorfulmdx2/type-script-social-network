import React from 'react';
import styleDialogs from './Message.module.css'





const Message = (props: any) => {

    return (
        <div className={styleDialogs.messages}>
            <div>{props.singleMessageElement}</div>
            <div>
                <div>
                    <textarea value={props.newMessageBody}
                               placeholder={'Enter your message'}
                               onChange={props.onNewMessageChange}
                >

                    </textarea>
                </div>
                <div><button onClick={props.onSendMessageClick}>Send</button></div>
            </div>


        </div>
    )
}

export default Message;
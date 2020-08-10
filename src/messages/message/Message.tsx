import React from 'react';
import styleDialogs from './Message.module.css'
import SingleMessage from "./single-message/SingleMessage";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../components/common/Forms-Control/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


type MessageFormDataType = {
    messageBody: string
}

let maxLength10 = maxLengthCreator(10)

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'messageBody'}
                       name={'messageBody'}
                       validate={[required, maxLength10]}
                       component={Textarea}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<MessageFormDataType>({form: 'addMessage'}) (AddMessageForm)

export const Message = (props: any) => {
    let singleMessageElement = props.messagesData.map((message: { messages: string; }) =>
        <SingleMessage text={message.messages}/>)

    const addMessage = (values: MessageFormDataType) => {
        props.onSendMessageClick(values.messageBody)
        console.log(values.messageBody)
    }

    return (
        <div className={styleDialogs.messages}>
            <div>{singleMessageElement}</div>
            <div>
                <div>
                    <AddMessageReduxForm onSubmit={addMessage}/>
                </div>
                <div><button onClick={props.onSendMessageClick}>Send</button></div>
            </div>


        </div>
    )
}



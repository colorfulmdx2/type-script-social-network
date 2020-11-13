import React, {ChangeEvent, useState} from 'react';
import style from './Message.module.scss'
import SingleMessage from "./single-message/SingleMessage";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/Forms-Control/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {useDispatch} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";
import {sendMessageCreator} from "../../../redux/dialogs-reducer";


/*type MessageFormDataType = {
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

const AddMessageReduxForm = reduxForm<MessageFormDataType>({form: 'addMessage'}) (AddMessageForm)*/

export const Message = (props: any) => {

    const [text, setText] = useState('')


    const dispatch = useDispatch()

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    const addMessageHandler = () => {
        dispatch(sendMessageCreator(text))
        //setText('')
    }

    const singleMessageElement = props.messagesData.map((message: { messages: string; }) =>
        <SingleMessage text={message.messages}/>)


    return (
        <div className={style.messages}>

            <div className={style.messagesElements}>{singleMessageElement}</div>

            <div className={style.inputMessage}>
                <textarea onChange={onChange}
                          value={text}
                />

                <button onClick={addMessageHandler}>{'>'}</button>
            </div>

        </div>
    )
}



import React from "react";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import styleProfile from './Profile.module.css'
import {Input, Textarea} from "../../components/common/Forms-Control/FormsControls";
import style from "../../components/common/Forms-Control/Form-control.module.css";

export type ProfileFormDataType = {
    fullName: string
    aboutMe: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormDataType>> = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>SAVE</button>
            </div>
            {
                props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <label>Full name</label>
                <Field name={'fullName'}
                       validators={[]}
                       component={Input}
                />
            </div>
            <div>
                <label>About me</label>
                <Field placeholder={'Type smth about you'}
                       name={'aboutMe'}
                       validators={[]}
                       component={Textarea}
                />
            </div>
            <div>
                <label>Looking for a job</label>
                <Field placeholder={'Type your name'}
                       name={'lookingForAJob'}
                       validators={[]}
                       component={Input}
                       type={'checkbox'}
                />
            </div>
            <div>
                <label>My professional skills</label>
                <Field placeholder={'Type your skills'}
                       name={'lookingForAJobDescription'}
                       validators={[]}
                       component={Textarea}
                />
            </div>
            <div>
                <b>Contacts</b>:
                {
                    Object.keys(props.initialValues.contacts).map((k: any) => {
                        return (
                            <div key={k} className={styleProfile.contactElement}>
                                {k}:
                                {/*<label>{k}</label>*/}
                                <Field name={'contacts.' + k}
                                       placeholder={'Type your ' + k}
                                       component={Input}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </form>
    )
}
const ProfileReduxForm = reduxForm<ProfileFormDataType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileReduxForm
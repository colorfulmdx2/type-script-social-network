import React from "react";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {saveProfile} from "../../../../../redux/profile-reducer";
import style from './ProfileForm.module.scss'
import {AppStateType} from "../../../../../redux/redux-store";


export const ProfileDataForm = (props:any) => {

    const dispatch = useDispatch()


    const {github, twitter, facebook, instagram, mainLink} = useSelector<AppStateType, any>(state => state.profileState.profile?.contacts)

    const {fullName, aboutMe, lookingForAJobDescription, lookingForAJob} = useSelector<AppStateType, any>(state => state.profileState.profile)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            FullName: fullName,
            AboutMe: aboutMe,
            lookingForAJobDescription: lookingForAJobDescription,
            lookingForAJob: lookingForAJob,
            instagram: instagram,
            twitter: twitter,
            linkedIn: mainLink,
            facebook: facebook,
            gitHub: github,


        },
        onSubmit: values => {
            debugger
            let obj = {
                FullName: values.FullName,
                AboutMe: values.AboutMe,
                lookingForAJobDescription: values.lookingForAJobDescription,
                lookingForAJob: values.lookingForAJob,
                contacts: {
                    instagram: values.instagram,
                    twitter: values.twitter,
                    linkedIn: values.linkedIn,
                    facebook: values.facebook,
                    gitHub: values.gitHub,
                }
            }
            dispatch(saveProfile(obj))
            dispatch(props.onCancel)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>

            <div className={style.element}>
                <div className={style.title}>Change you'r name</div>
                <input className={style.input} type={'text'}
                       {...formik.getFieldProps('FullName')}
                />
            </div>

            <div className={style.element}>
                <div className={style.title}>About me</div>
                <textarea
                       {...formik.getFieldProps('AboutMe')}
                />
            </div>

            <div className={style.element}>
                <div className={style.title}>Press if you're looking for a job</div>
                <input className={style.checkbox} type={'checkbox'}
                       {...formik.getFieldProps('lookingForAJob')}
                />
            </div>

            <div className={style.element}>
                <div className={style.title}>Describe your skills</div>
                <textarea
                       {...formik.getFieldProps('lookingForAJobDescription')}
                />
            </div>

            <div className={style.element}>
                <div className={style.title}>Instagram</div>
                <input className={style.input} type={'text'}
                       {...formik.getFieldProps('instagram')}
                />
            </div>

            <div className={style.element}>
                <div className={style.title}>Twitter</div>
                <input className={style.input} type={'text'}
                       {...formik.getFieldProps('twitter')}
                />
            </div>

            <div className={style.element}>
                <div className={style.title}>LinkedIn</div>
                <input className={style.input} type={'text'}
                       {...formik.getFieldProps('linkedIn')}
                />
            </div>

            <div className={style.element}>
                <div className={style.title}>Facebook</div>
                <input className={style.input} type={'text'}
                       {...formik.getFieldProps('facebook')}
                />
            </div>

            <div className={style.element}>
                <div className={style.title}>GitHub</div>
                <input className={style.input} type={'text'}
                       {...formik.getFieldProps('gitHub')}
                />
            </div>


            <button className={style.button}>Send</button>
        </form>
    )
}
/*
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
                {/!*<Field name={'fullName'}*!/}
                {/!*       validators={[]}*!/}
                {/!*       component={getInput()}*!/}
                {/!*!/>*!/}
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
                {/!*<Field placeholder={'Type your name'}
                       name={'lookingForAJob'}
                       validators={[]}
                       component={Input}
                       type={'checkbox'}
                />*!/}
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
                                {/!*<label>{k}</label>*!/}
                                {/!*<Field name={'contacts.' + k}
                                       placeholder={'Type your ' + k}
                                       component={Input}
                                />*!/}
                            </div>
                        )
                    })
                }
            </div>
        </form>
    )
}
const ProfileReduxForm = reduxForm<ProfileFormDataType>({form: 'edit-a3-profile'})(ProfileDataForm)

export default ProfileReduxForm*/

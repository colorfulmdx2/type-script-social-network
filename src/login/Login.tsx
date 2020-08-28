import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";
import {Input} from "../components/common/Forms-Control/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import style from '../components/common/Forms-Control/Form-control.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginMapDispatchToPropsType = {
    login: any

}
type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: null | string
}
type PropsType = LoginMapDispatchToPropsType & mapStateToPropsType

const Login = (props: PropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}
                            captchaUrl={props.captchaUrl || ''}
            />
        </div>
    )
}

let maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType, {captchaUrl:string}> & {captchaUrl:string}> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       validate={[required, maxLength30]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       type={'password'}
                       validate={[required, maxLength30]}
                       component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Input}/> remember me
            </div>
            {
                error && <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            {
                error && <img src={captchaUrl}/>
            }
            {
                error && <Field placeholder={'Type the symbols'}
                                name={'captcha'}
                                component={Input}
                                validate={[required]}
                />
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

const LoginReduxForm = reduxForm<FormDataType, {captchaUrl:string}>({form: 'login'})(LoginForm)

export default connect(mapStateToProps, {login})(Login)
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
}
type LoginMapDispatchToPropsType = {
    login: any
}
type mapStateToPropsType = {
    isAuth: boolean
}
type PropsType = LoginMapDispatchToPropsType & mapStateToPropsType

const Login = (props: PropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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
                props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
export default connect(mapStateToProps, {login})(Login)
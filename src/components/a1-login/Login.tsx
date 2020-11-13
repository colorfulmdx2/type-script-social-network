import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {getInput} from "../common/Forms-Control/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from '../common/Forms-Control/Form-control.module.scss'
import {Checkbox} from "../common/Checkbox/Checkbox";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const Login = () => {


    const dispatch = useDispatch()

    const captchaUrl = useSelector<AppStateType, string | null>(state => state.auth.captchaUrl)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)


    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }


    if (isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <div className={style.loginContainer}>
            <div className={`${style.element} ${style.image}`}>
                <img src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt=""/>
            </div>
            <div className={`${style.element} ${style.form}`}>
                <div className={style.title}>Member Login</div>
                <LoginReduxForm onSubmit={onSubmit}
                                captchaUrl={captchaUrl || ''}
                />
            </div>
        </div>
    )
}

let maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType, {captchaUrl:string}> & {captchaUrl:string}> = ({handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       validate={[required, maxLength30]}
                       component={getInput('email')}/>
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       type={'password'}
                       validate={[required, maxLength30]}
                       component={getInput('password')}/>
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Checkbox}/>
            </div>
            {
                error && <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            {
                captchaUrl && <img src={captchaUrl}/>
            }
           {/* {
                captchaUrl && <Field placeholder={'Type the symbols'}
                                name={'captcha'}
                                component={Input}
                                validate={[required]}
                />
            }*/}
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, {captchaUrl:string}>({form: 'login'})(LoginForm)





//--------------------------------------------------------------------------------------------------------

/*
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginMapDispatchToPropsType = {
    a1-login: any

}
type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: null | string
}
type PropsType = LoginMapDispatchToPropsType & mapStateToPropsType

const Login = (props: PropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.a1-login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to='/a3-profile'/>
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

const LoginForm: React.FC<InjectedFormProps<FormDataType, {captchaUrl:string}> & {captchaUrl:string}> = ({handleSubmit, error, captchaUrl, }) => {
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
                captchaUrl && <img src={captchaUrl}/>
            }
            {
                captchaUrl && <Field placeholder={'Type the symbols'}
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

const LoginReduxForm = reduxForm<FormDataType, {captchaUrl:string}>({form: 'a1-login'})(LoginForm)

export default connect(mapStateToProps, {a1-login})(Login)*/

import React from "react";
import style from "./Form-control.module.scss"
import {Icon} from "../icon/Icon";
import email from '../../../assets/images/email.svg'
import password from '../../../assets/images/password.svg'


const FormControl = ({meta: {touched, error}, children}:any) => {
    const hasError = error && touched

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')} >
            <div>
                {children}
            </div>
           {/* {hasError && <span>{error}</span>}*/}
        </div>
    )

}

export const Textarea = (props:any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

/*export const InputEmail = (props:any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <div>
            <FormControl {...props}><input className={style.input} {...input} {...restProps}/>
               <div className={style.icon}>
                   <Icon img={email}/>
               </div>
            </FormControl>

        </div>
    )
}

export const InputPassword = (props:any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <div>
            <FormControl {...props}><input className={style.input} {...input} {...restProps}/>
                <div className={style.icon}>
                    <Icon img={password}/>
                </div>
            </FormControl>

        </div>
    )
}*/

export const getInput = (type: string) => {

    const Input = (props:any) => {
        const {input, meta, child, ...restProps} = props
        return (
            <div className={style.container}>
                <FormControl {...props}><input className={style.input} {...input} {...restProps}/>
                    <div className={style.icon}>
                        <Icon img={type === 'password' ? password : email}/>
                    </div>
                </FormControl>

            </div>
        )
    }

    return Input
}


// export const Textarea = ({input, meta, ...props}:any) => {
//
//     const hasError = meta.error && meta.touched
//
//     return (
//         <div className={styleFrorm.formControl + ' ' + (hasError ? styleFrorm.error : '')} >
//             <div>
//                 <textarea {...props} {...input}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
//
// export const Input = ({input, meta, ...props}:any) => {
//
//     const hasError = meta.error && meta.touched
//
//     return (
//         <div className={styleFrorm.formControl + ' ' + (hasError ? styleFrorm.error : '')} >
//             <div>
//                 <input {...props} {...input}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
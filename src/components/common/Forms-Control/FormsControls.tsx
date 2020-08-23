import React from "react";
import styleFrorm from "./Form-control.module.css"


const FormControl = ({meta: {touched, error}, children}:any) => {
    const hasError = error && touched

    return (
        <div className={styleFrorm.formControl + ' ' + (hasError ? styleFrorm.error : '')} >
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )

}

export const Textarea = (props:any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props:any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
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
import React from "react";
import style from './Icom.module.scss'

type PropsType = {
    img: any
}

export const Icon = (props: PropsType) => {
    return (
       <div className={style.container}>
           <img src={props.img}/>
       </div>
    )
}
import React from "react";
import style from './NavElement.module.scss'
import {NavLink} from "react-router-dom";

type PropsType = {
    icon: any
    text: string
    to: string
}

export const NavElement = (props: PropsType) => {
    return (
        <div className={style.container}>

            <div className={style.icon}>
                <img src={props.icon} alt=""/>

            </div>

            <div className={style.lik}><NavLink to={props.to} activeClassName={style.activeLink}>{props.text}</NavLink></div>

        </div>
    )
}
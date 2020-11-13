import React from "react";
import style from './LoginPage.module.scss'
import {Login} from "../Login";
import logo from '../../../assets/images/logo.png'

export const LoginPage = () => {
    return (
        <div className={style.container}>
            <img className={style.img} src={logo} alt=""/>
            <Login/>
        </div>
    )
}

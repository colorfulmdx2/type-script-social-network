import React from 'react';
import style from './Header.module.scss'
import {CommonAuthUsersPropsType} from "./HeaderContainer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { AvatarMini } from './Avatar-mini/Avatar-mini';
import logo from '../../assets/images/logo.png'



export const Header = (props: CommonAuthUsersPropsType) => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const logoutOnclickHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        const confirmValue = confirm('Are you really want to quit?')

        if (confirmValue) {
            props.logout()
        } else {
            return
        }
    }

    return (
        <div className={style.header}>
           <div className={style.headerContainer}>

               <div className={style.logo}>
                   <img src={logo} alt=""/>
               </div>

               {
                   isAuth && <div className={style.avatar}>
                       <AvatarMini/>
                   </div>
               }

               <div className={style.container}>
                   <div className={style.loginBlock}>
                       {
                           props.isAuth
                               ? <div>
                                   <button className={style.headerButton} onClick={logoutOnclickHandler}>Quit</button>
                               </div>
                               : null
                       }

                   </div>
               </div>

           </div>
        </div>
    )
}


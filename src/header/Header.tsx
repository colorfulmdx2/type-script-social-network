import React from 'react';
import styleHeader from './Header.module.css'
import Logo from "./logo/Logo";
import {NavLink} from "react-router-dom";
import {CommonAuthUsersPropsType} from "./HeaderContainer";


function Header(props: CommonAuthUsersPropsType) {
    debugger
    return (
        <div className={styleHeader.header}>
            <Logo/>
            <div className={styleHeader.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>
        )
    }

export default Header;
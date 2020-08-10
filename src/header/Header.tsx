import React from 'react';
import styleHeader from './Header.module.css'
import Logo from "./logo/Logo";
import {NavLink} from "react-router-dom";
import {CommonAuthUsersPropsType} from "./HeaderContainer";


function Header(props: CommonAuthUsersPropsType) {
    return (
        <div className={styleHeader.header}>
            <Logo/>
            <div className={styleHeader.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>
        )
    }

export default Header;
import React from 'react';
import style from './Navigation.module.scss'
import {NavLink} from "react-router-dom";
import {NavElement} from "./Nav-element/NavElement";
import homePage from '../../assets/images/HomePage.svg'


const Navigation = (props: any) => {

    
    return (
        <div className={style.navigation}>
            <div className={style.navItem}><NavLink to='/profile' activeClassName={style.activeLink}></NavLink><div>Profile</div></div>
            <div className={style.navItem}><NavLink to='/dialogs' activeClassName={style.activeLink}></NavLink><div>Messages</div></div>
            <div className={style.navItem}><NavLink to='/users' activeClassName={style.activeLink}></NavLink><div>Users</div></div>
            <div className={style.navItem}><NavLink to='/music' activeClassName={style.activeLink}></NavLink><div>Music</div></div>
            <div className={style.navItem}><NavLink to='/setting' activeClassName={style.activeLink}></NavLink><div>Setting</div></div>
            <div className={style.navItem}><NavLink to='/news' activeClassName={style.activeLink}></NavLink><div>News</div></div>
        </div>
    )
}

export default Navigation;
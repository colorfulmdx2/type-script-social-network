import React from 'react';
import styleNavigation from './Navigation.module.css'
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return (
        <div className={styleNavigation.navigation}>
            <div className={styleNavigation.navItem}><NavLink to='/profile' activeClassName={styleNavigation.activeLink}>Profile</NavLink></div>
            <div className={styleNavigation.navItem}><NavLink to='/dialogs' activeClassName={styleNavigation.activeLink}>Messages</NavLink></div>
            <div className={styleNavigation.navItem}><NavLink to='/news' activeClassName={styleNavigation.activeLink}>News</NavLink></div>
            <div className={styleNavigation.navItem}><NavLink to='/music' activeClassName={styleNavigation.activeLink}>Music</NavLink></div>
            <div className={styleNavigation.navItem}><NavLink to='/setting' activeClassName={styleNavigation.activeLink}>Setting</NavLink></div>
        </div>
    )
}

export default Navigation;
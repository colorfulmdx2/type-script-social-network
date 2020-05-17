import React from 'react';
import styleNavigation from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import FriendIcon from "./friend-icon/FriendIcon";
import styleFriendIcon from "./friend-icon/FriendIcon.module.css";




const Navigation = (props: any) => {


    let friendIcon =  props.friendIconData.map((icon: any) => <FriendIcon name={icon.name}/> )
    return (
        <div className={styleNavigation.navigation}>
            <div className={styleNavigation.navItem}><NavLink to='/profile' activeClassName={styleNavigation.activeLink}>Profile</NavLink></div>
            <div className={styleNavigation.navItem}><NavLink to='/dialogs' activeClassName={styleNavigation.activeLink}>Messages</NavLink></div>
            <div className={styleNavigation.navItem}><NavLink to='/news' activeClassName={styleNavigation.activeLink}>News</NavLink></div>
            <div className={styleNavigation.navItem}><NavLink to='/music' activeClassName={styleNavigation.activeLink}>Music</NavLink></div>
            <div className={styleNavigation.navItem}><NavLink to='/setting' activeClassName={styleNavigation.activeLink}>Setting</NavLink></div>
            <div className={styleNavigation.icon}>
                <div className={styleNavigation.title}>
                    <p>Friends</p>
                </div>
                <div className={styleNavigation.iconContainer}>
                    {friendIcon}
                </div>
            </div>

        </div>
    )
}

export default Navigation;
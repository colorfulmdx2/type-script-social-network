import React from 'react';
import styleNavigation from './Navigation.module.css'


const Navigation = () => {
    return (
        <div className={styleNavigation.navigation}>
            <div className={styleNavigation.navItem}><a href='/profile'>Profile</a></div>
            <div className={styleNavigation.navItem}><a href='/dialogs'>Messages</a></div>
            <div className={styleNavigation.navItem}><a href='/news'>News</a></div>
            <div className={styleNavigation.navItem}><a href='/music'>Music</a></div>
            <div className={styleNavigation.navItem}><a href='/setting'>Setting</a></div>
        </div>
    )
}

export default Navigation;
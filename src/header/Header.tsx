import React from 'react';
import styleHeader from './Header.module.css'
import Logo from "./logo/Logo";

function Header() {
    return (
        <div className={styleHeader.header}>
            <Logo/>
        </div>
        )
    }

export default Header;
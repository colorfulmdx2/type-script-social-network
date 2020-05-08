import React from 'react';
import styleLogo from './Logo.module.css'


const Logo = () => {
    return (
        <div className={styleLogo.logo}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Albert_Heijn_Logo.svg/1200px-Albert_Heijn_Logo.svg.png' /></div>
    )
}

export default Logo;
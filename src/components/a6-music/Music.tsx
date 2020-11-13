import React from 'react';
import styleMusic from './Music.module.css'
import WithAuthRedirect from "../../HOC/WithAuthRedirect";

const Music = () => {
    return (
        <div className={styleMusic.music}>
            Music
        </div>
    )
}

export default WithAuthRedirect(Music);
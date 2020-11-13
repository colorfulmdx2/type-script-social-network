import preloader from "./Preloader-image/preloaderPurple.gif"
import React from "react";
import style from './Preloader.module.scss'

let Preloader = () => {
    return (
        <div className={style.preloader}>
             <img src={preloader}/>
        </div>
    )
}

export default Preloader

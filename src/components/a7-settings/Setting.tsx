import React from 'react';
import styleSetting from './Setting.module.css'
import WithAuthRedirect from "../../HOC/WithAuthRedirect";

const Setting = () => {
    return (
        <div className={styleSetting.setting}>
            Setting
        </div>
    )
}

export default WithAuthRedirect(Setting);
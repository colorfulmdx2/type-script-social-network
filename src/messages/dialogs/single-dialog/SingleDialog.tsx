import React from 'react';
import styleDialog from './SingleDialog.module.css'
import {NavLink} from "react-router-dom";

type SingleDialogType = {
    name: string
    id: string

}

const SingleDialog = (props: SingleDialogType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={styleDialog.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

/*const Dialogs = () => {
    return (
        <div className={styleDialogs.dialogs}>
            <SingleDialog/>
            <div className={styleDialogs.dialog}>
                <NavLink to='/dialogs/2' >Angelo</NavLink>
            </div>
            <div className={styleDialogs.dialog}>
                <NavLink to='/dialogs/3'>Mario</NavLink>
            </div>
            <div className={styleDialogs.dialog}>
                <NavLink to='/dialogs/4'>Jovani</NavLink>
            </div>
            <div className={styleDialogs.dialog}>
                <NavLink to='/dialogs/5'>Liba</NavLink>
            </div>
            <div className={styleDialogs.dialog}>
                <NavLink to='/dialogs/6'>Lukas</NavLink>
            </div>
        </div>
    )
}*/

export default SingleDialog;
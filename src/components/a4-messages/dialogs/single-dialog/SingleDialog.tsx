import React from 'react';
import style from './SingleDialog.module.scss'
import avatar from '../../../../assets/images/user.png'

type SingleDialogType = {
    name: string
    id: number
    avatar: string
}

const SingleDialog = (props: SingleDialogType) => {

    //let path = '/dialogs/' + props.id

    return (
        <div className={style.after}>
            <div className={style.dialog}>
                <img className={style.avatar} src={props.avatar ? props.avatar : avatar}/>
                <div className={style.name}>{props.name}</div>
            </div>
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
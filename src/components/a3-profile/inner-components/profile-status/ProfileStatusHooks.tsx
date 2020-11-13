import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {updateStatus} from "../../../../redux/profile-reducer";
import style from './Status.module.scss'

export const ProfileStatusHooks = (props: any) => {

    const statusValue = useSelector<AppStateType, string>(state => state.profileState.status)

    const dispatch = useDispatch()

    let [state, setState] = useState(false)
    let [status, setStatus] = useState(statusValue)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeteEditMode = () => setState(true)

    const deactivateEditMode = () => {
        setState(false)

        dispatch(updateStatus(status))
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={style.container}>

            <div>
                <span className={style.text} onDoubleClick={activeteEditMode}>{statusValue ||
                <span className={style.defaultText}>sent a status message</span>}</span>
            </div>

            {
                state &&
                <div className={style.inputContainer}>
                    <input className={style.input} autoFocus={true}
                           onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           value={status}
                    />
                </div>
            }
        </div>
    )
}



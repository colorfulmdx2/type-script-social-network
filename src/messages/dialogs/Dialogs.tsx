import React from 'react';
import styleDialogs from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import SingleDialog from "./single-dialog/SingleDialog";


const Dialogs = () => {
    return (
        <div className={styleDialogs.dialogs}>
            <SingleDialog id={'1'} name='Dima'/>
            <SingleDialog id={'2'} name='Kate'/>
            <SingleDialog id={'3'} name='Mario'/>
            <SingleDialog id={'4'} name='Jovanni'/>
            <SingleDialog id={'5'} name='Franchesco'/>
            <SingleDialog id={'6'} name='Karin'/>
        </div>
    )
}

export default Dialogs;
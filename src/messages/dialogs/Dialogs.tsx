import React from 'react';
import styleDialogs from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import SingleDialog from "./single-dialog/SingleDialog";



const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Mario'},
        {id: 4, name: 'Jovanni'},
        {id: 5, name: 'Franchesco'},
        {id: 6, name: 'Karin'},
    ]
    let dialogElement = dialogsData.map(dialog => <SingleDialog id={dialog.id} name={dialog.name}/>)

    return (
        <div className={styleDialogs.dialogs}>
            {dialogElement}
        </div>
    )
}

export default Dialogs;
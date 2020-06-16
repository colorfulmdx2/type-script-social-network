import React from 'react';
import styleDialogs from './Dialogs.module.css'
import SingleDialog from "./single-dialog/SingleDialog";



const Dialogs = (props: any) => {

    // let dialogElement = props.dialogsData.map((dialog: { id: number; name: string; }) => <SingleDialog id={dialog.id} name={dialog.name}/>)

    return (

            <div className={styleDialogs.dialogs}>
                {props.dialogElement}

            </div>

    )
}

export default Dialogs;
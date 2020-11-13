import React from 'react';
import MessageContainer from "./message/MessageContainer";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import style from './Messages.module.scss'
import Dialogs from "./dialogs/Dialogs";

const Messages = () => {
   return (
       <div className={style.messages}>
           <Dialogs />
           <MessageContainer/>
       </div>
   )
}


export default  WithAuthRedirect(Messages);


import React from 'react';
import MessageContainer from "./message/MessageContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import WithAuthRedirect from "../HOC/WithAuthRedirect";

const Messages = () => {
   return (
       <div>
           <DialogsContainer />
           <MessageContainer/>
       </div>
   )
}


export default  WithAuthRedirect(Messages);


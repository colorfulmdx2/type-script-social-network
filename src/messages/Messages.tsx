import React from 'react';
import MessageContainer from "./message/MessageContainer";
import DialogsContainer from "./dialogs/DialogsContainer";

const Messages = () => {
   return (
       <div>
           <DialogsContainer />
           <MessageContainer/>
       </div>
   )
}


export default Messages;


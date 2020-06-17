import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";



let mapStateToProps = (state:any) => {
    return {
        dialogsData: state.dialogsState.dialogsData
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {

    }
}



export default connect(mapStateToProps, mapDispatchToProps) (Dialogs);

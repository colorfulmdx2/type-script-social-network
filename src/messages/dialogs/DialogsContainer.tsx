import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";



let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsData: state.dialogsState.dialogsData
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {

    }
}



export default connect(mapStateToProps, mapDispatchToProps) (Dialogs);

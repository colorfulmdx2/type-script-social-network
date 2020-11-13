import React from 'react';
import {addPost, updateNewPostText} from "../../../../redux/profile-reducer";


import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";






/*let mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profileState.postData
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPostHandler: (postBody: string) => {
            dispatch(addPost(postBody))
        },
        updateNewPostTextHandler: (text:string) => {
            let action = updateNewPostText(text)
            dispatch(action)
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);*/



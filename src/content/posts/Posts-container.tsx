import React from 'react';
import {addPost, updateNewPostText} from "../../redux/profile-reducer";
import Posts from "./Posts";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";






let mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: state.profileState.newPostText,
        postData: state.profileState.postData
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPostHandler: () => {
            dispatch(addPost())
        },
        updateNewPostTextHandler: (text:string) => {
            let action = updateNewPostText(text)
            dispatch(action)
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);

/*
return (
    <StoreContext.Consumer>
        { store => {
            let state = store.getState()

            let addPostHandler = () => {
                store.dispatch(addPostActionCreator())
            }

            let updateNewPostTextHandler = (text:string) => {
                let action = updateNewPostTextActionCreator(text)
                store.dispatch(action)

            }
            return (
                <Posts updateNewPostText={updateNewPostTextHandler}
                       addPost={addPostHandler}
                       newPostText={state.profileReducer.newPostText}
                />
            )
        }
        }
    </StoreContext.Consumer>
)*/

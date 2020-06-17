import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import Posts from "./Posts";

import {connect} from "react-redux";






let mapStateToProps = (state:any) => {
    return {
        newPostText: state.profileState.newPostText,
        postData: state.profileState.postData
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPostHandler: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostTextHandler: (text:string) => {
            let action = updateNewPostTextActionCreator(text)
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

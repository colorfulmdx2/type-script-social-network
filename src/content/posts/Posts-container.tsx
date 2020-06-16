import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../store-context";

type postsType = {
    addPost: () => void
    newPostText: () => void
    dispatch: () => void
    title: string
}




const PostsContainer = (props: any) => {

    // let state = props.store.getState()

    /*let addPostHandler = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let updateNewPostTextHandler = (text:string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)

    }*/

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
    )
}

export default PostsContainer;
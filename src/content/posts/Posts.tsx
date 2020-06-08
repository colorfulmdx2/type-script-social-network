import React from 'react';
import stylePosts from "./Posts.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";

type postsType = {
    addPost: () => void
    newPostText: () => void
    dispatch: () => void
    title: string
}




const Posts = (props: any) => {

    let newPostElement: any = React.createRef()

    let addPostHandler = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)

    }

    return (

        <div className={stylePosts.posts}>
            <div className={stylePosts.addPosts}>
                <h2>{props.title}</h2>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}
                />
            </div>
            <div className={stylePosts.buttonWrapper}>
                <input onClick={addPostHandler} type='button' value='Send' className={stylePosts.button}/>
            </div>
        </div>

    )
}

export default Posts;
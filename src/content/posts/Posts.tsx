import React from 'react';
import stylePosts from "./Posts.module.css";


const Posts = (props: any) => {

    let newPostElement: any = React.createRef()

    let addPostHandler = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action)

    }

    return (

        <div className={stylePosts.posts}>
            <div className={stylePosts.addPosts}>
                <h2>My Posts</h2>
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
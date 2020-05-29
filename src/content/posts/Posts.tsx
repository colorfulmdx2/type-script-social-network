import React from 'react';
import stylePosts from "./Posts.module.css";


const Posts = (props: any) => {

    let newPostElement: any = React.createRef()

    let addPostHandler = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
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
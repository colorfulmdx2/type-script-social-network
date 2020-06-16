import React from 'react';
import stylePosts from "./Posts.module.css";


type postsType = {
    addPost: () => void
    newPostText: () => void
    dispatch: () => void
    title: string
}




const Posts = (props: any) => {

    let newPostElement: any = React.createRef()

    let addPostHandler = () => {
        props.addPost()
    }

    let onPostChangeHandler = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    }

    return (

        <div className={stylePosts.posts}>
            <div className={stylePosts.addPosts}>
                <h2>{props.title}</h2>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChangeHandler}
                />
            </div>
            <div className={stylePosts.buttonWrapper}>
                <input onClick={addPostHandler} type='button' value='Send' className={stylePosts.button}/>
            </div>
        </div>

    )
}

export default Posts;
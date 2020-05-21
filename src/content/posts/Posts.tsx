import React from 'react';
import stylePosts from "./Posts.module.css";


const Posts = (props: any) => {

    let newPostElement: any = React.createRef()
    let addPost = () => {
            let text = newPostElement.current.value
            props.addPost(text)
        newPostElement.current.value = ''
    }

    return (

        <div className={stylePosts.posts}>
            <div className={stylePosts.addPosts}>
                <h2>My Posts</h2>
                <textarea ref={newPostElement}/>
            </div>
            <div className={stylePosts.buttonWrapper}>
                <input onClick={addPost} type='button' value='Send' className={stylePosts.button}/>
            </div>
        </div>

    )
}

export default Posts;
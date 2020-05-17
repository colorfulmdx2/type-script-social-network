import React from 'react';
import stylePosts from "./Posts.module.css";

const Posts = () => {

    return (

        <div className={stylePosts.posts}>
            <div className={stylePosts.addPosts}>
                <h2>My Posts</h2>
                <textarea></textarea>
            </div>
            <div className={stylePosts.buttonWrapper}>
                <input type='button' value='Send'  className={stylePosts.button}/>
            </div>
        </div>

    )
}

export default Posts;
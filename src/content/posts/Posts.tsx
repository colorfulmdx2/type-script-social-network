import React from 'react';
import stylePosts from "./Posts.module.css";
import AddedPost from "./added-posts/AddedPost";


/*
type postsType = {
    addPost: () => void
    newPostText: () => void
    dispatch: () => void
    title: string
}
*/




const Posts = (props: any) => {

    let newPostElement: any = React.createRef()

    let addPostHandler = () => {
        props.addPostHandler()
    }

    let onPostChangeHandler = () => {
        let text = newPostElement.current.value
        props.updateNewPostTextHandler(text)

    }


    let addedPosts = props.postData.map((element: { id: number; like: string; message: string; }) =>
        <AddedPost id={element.id} like={element.like} message={element.message}/>)

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
            {addedPosts}
        </div>

    )
}

export default Posts;
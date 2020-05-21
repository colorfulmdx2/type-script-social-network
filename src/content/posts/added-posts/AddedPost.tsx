import React from 'react';
import styleAddedPost from "./AddedPost.module.css";

type AddedPost = {
    id: number
    like: string
    message: string
}

const AddedPost = (props: AddedPost) => {
    return (
        <div>
        <div className={styleAddedPost.post}>

            <img className={styleAddedPost.img} src="https://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg" alt=""/>
            <div className={styleAddedPost.text}>{props.message}</div>

        </div>
            <span className={styleAddedPost.span}>{props.like + ' likes'}</span>
        </div>
    )
}

export default AddedPost;
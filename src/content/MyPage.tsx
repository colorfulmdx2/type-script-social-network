import React from 'react';
import styleContent from "./MyPage.module.css";
import BackAvatar from "./back-avatar/BackAvatar";
import Profile from "./profile-info/Profile";
import Posts from "./posts/Posts";
import AddedPost from "./posts/added-posts/AddedPost";


const MyPage = () => {

    let postData = [
        {like: '12', message: 'Hello world'}
    ]
    let postElement = postData.map(element => <AddedPost like={element.like} message={element.message}/>)
    
    return (
        <div className={styleContent.page}>
            <BackAvatar/>
            <Profile/>
            <Posts/>
            {postElement}




        </div>
    )
}

export default MyPage;
import React from 'react';
import styleContent from "./MyPage.module.css";
import BackAvatar from "./back-avatar/BackAvatar";
import Profile from "./profile-info/Profile";
import Posts from "./posts/Posts";
import AddedPost from "./posts/added-posts/AddedPost";


const MyPage = () => {
    return (
        <div className={styleContent.page}>
            <BackAvatar/>
            <Profile/>
            <Posts/>
            <AddedPost like='12' message='Hello world'/>




        </div>
    )
}

export default MyPage;
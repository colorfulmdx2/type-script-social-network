import React from 'react';
import styleContent from "./MyPage.module.css";
import BackAvatar from "./back-avatar/BackAvatar";
import Profile from "./profile-info/Profile";
import Posts from "./posts/Posts";
import AddedPost from "./posts/added-posts/AddedPost";


const MyPage = (props: any) => {


    let postElement = props.postData.map((element: {id: number; like: string; message: string; }) => <AddedPost id={element.id} like={element.like} message={element.message}/>)
    
    return (
        <div className={styleContent.page}>
            <BackAvatar/>
            <Profile/>
            <Posts addPost={props.addPost}/>
            {postElement}




        </div>
    )
}

export default MyPage;
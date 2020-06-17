import React from 'react';
import styleContent from "./MyPage.module.css";
import BackAvatar from "./back-avatar/BackAvatar";
import Profile from "./profile-info/Profile";
import AddedPost from "./posts/added-posts/AddedPost";
import PostsContainer from "./posts/Posts-container";



const MyPage = (props:any) => {

              
                return (
                    <div className={styleContent.page}>
                        <BackAvatar/>
                        <Profile/>
                        <PostsContainer />

                    </div>
                )

}


export default MyPage;



/*const MyPage = (props: any) => {
    return (
        <div className={styleContent.page}>
            <BackAvatar/>
            <Profile/>
            <PostsContainer
            />
            {addedPosts}
        </div>
    )
}*/

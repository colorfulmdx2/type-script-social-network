import React from 'react';
import styleContent from "./MyPage.module.css";
import BackAvatar from "./back-avatar/BackAvatar";
import Profile from "./profile-info/Profile";
import AddedPost from "./posts/added-posts/AddedPost";
import PostsContainer from "./posts/Posts-container";

export type profileProps = {
    profile: any
}

const MyPage = (props: profileProps) => {

              
                return (
                    <div className={styleContent.page}>
                        <BackAvatar/>
                        <Profile profile={props.profile}/>
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

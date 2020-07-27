import React from 'react';
import styleContent from "./MyPage.module.css";
import BackAvatar from "./back-avatar/BackAvatar";
import Profile from "./profile-info/Profile";
import PostsContainer from "./posts/Posts-container";
import ProfileStatus from "./profile-status/ProfileStatus";

export type MyPagePropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const MyPage = (props: MyPagePropsType) => {
    return (
        <div className={styleContent.page}>
            {/* <BackAvatar/>*/}
            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}
            />
            <Profile profile={props.profile}/>
            <PostsContainer/>

        </div>
    )

}


export default MyPage;



import React, {useState} from 'react';
import styleContent from "./MyPage.module.css";
import Profile from "./profile-info/Profile";
import PostsContainer from "./posts/Posts-container";
import {ProfileStatusHooks} from "./profile-status/ProfileStatusHooks";


export type MyPagePropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: (arg: any) => void
}

const MyPage = (props: MyPagePropsType) => {



    return (
        <div className={styleContent.page}>
            {/*<BackAvatar/>*/}
            <ProfileStatusHooks status={props.status}
                                updateStatus={props.updateStatus}
            />
            <Profile profile={props.profile}
                     isOwner={props.isOwner}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
            />

            <PostsContainer/>

        </div>
    )

}


export default MyPage;



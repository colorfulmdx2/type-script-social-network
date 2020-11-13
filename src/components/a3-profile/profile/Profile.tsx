import React, {useEffect, useState} from 'react';
import style from "./Prifile.module.scss";
import {ProfileInformation} from "../inner-components/profile-info/ProfileInformation";
import WithAuthRedirect from "../../../HOC/WithAuthRedirect";
import {useDispatch} from "react-redux";
import {getFriends} from "../../../redux/profile-reducer";


export type MyPagePropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: (arg: any) => void
}

const ProfileInfoContainer = (props: MyPagePropsType) => {


    return (
        <div className={style.page}>
            <ProfileInformation profile={props.profile}
                     isOwner={props.isOwner}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
            />
        </div>
    )

}

export default WithAuthRedirect(ProfileInfoContainer)






import React, {useState} from 'react';
import style from './ProfileInfo.module.scss'
import Preloader from "../../../common/Preloader/Preloader";
import {Avatar} from "./Avatar/Avatar";
import {AboutLarge} from "./About-large/AboutLarge";
import {Posts} from "../posts/Posts";
import {Friends} from "../friends/Friends";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

type ProfilePropsType = {
    profile: any
    isOwner: boolean
    savePhoto: any
    saveProfile: (arg: any) => any
}

export const ProfileInformation = (props: ProfilePropsType) => {

    const userId = useSelector<AppStateType, any >(state => state.profileState.profile?.userId)

    let [editMod, setEditMod] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (file: any) => {
            props.savePhoto(file)
    }

    /*const onSubmit = (formData: ProfileFormDataType) => {
        props.saveProfile(formData).then(() => {
            setEditMod(false)
        })

    }*/

    const goToEditMode = () => {
        setEditMod(true)
    }

//----------------------------------------------------------------------------------------------------------------------

    return (
        <div className={style.container}>

            <div className={style.row1}>

                <Avatar onChangeHandler={mainPhotoSelected}
                        photo={props.profile.photos.large}
                        isOwner={props.isOwner}
                />
                <Friends/>

            </div>

            <div className={style.row2}>

                <AboutLarge editMod={editMod}
                            fullName={props.profile.fullName}
                            aboutMe={props.profile.aboutMe}
                            lookingForAJob={props.profile.lookingForAJob}
                            contacts={props.profile.contacts}
                            isOwner={props.isOwner}
                            profile={props.profile}
                            goToEditMode={goToEditMode}
                            lookingForAJobDescription={props.profile.lookingForAJobDescription}

                />

                {
                    (userId === 8850) ? <Posts/> : null
                }

            </div>
        </div>
    )
}

export const Contacts = (props: any) => {
    return <div className={style.contactElement}>{props.contactTitle} : {props.contactValue}</div>
}


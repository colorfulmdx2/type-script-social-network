import React from 'react';
import style from "./AddedPost.module.scss";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../redux/redux-store";
import {ProfileFullType} from "../../../../../redux/profile-reducer";

type AddedPost = {
    id: number
    like: string
    message: string
}

const AddedPost = (props: AddedPost) => {

    const profile = useSelector<AppStateType, ProfileFullType | null>(state => state.profileState.profile)

    return (
        <div className={style.container}>
            <div className={style.post}>

                {
                    profile?.photos.small && <img className={style.img}
                     src={profile.photos.small}/>
                }
                <div className={style.text}>{props.message}</div>

            </div>
        </div>
    )
}

export default AddedPost;
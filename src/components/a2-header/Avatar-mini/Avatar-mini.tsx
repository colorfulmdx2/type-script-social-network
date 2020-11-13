import React, {useEffect} from 'react';
import style from './Logo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import anonim from '../../../assets/images/Anonim.png'
import {getMyProfile, getUserProfile} from "../../../redux/profile-reducer";


export const AvatarMini = () => {



    const profile = useSelector((state: AppStateType) => state.profileState.myProfile)

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    console.log(profile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMyProfile())
    }, [])

    return (
       <div className={style.avatarContainer}>
            <div className={style.name}>
                {profile?.fullName && profile.fullName.split(' ')[0]}
            </div>
           <div>
               <img className={style.avatar} src={isAuth && profile?.photos.small ? profile.photos.small : anonim}/>
           </div>
        </div>
    )
}

import React from 'react';
import styleProfile from './Profile.module.css'
import Preloader from "../../components/common/Preloader/Preloader";

type ProfilePropsType = {
    profile: any
}

const Profile = (props:ProfilePropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={styleProfile.profile}>
            <img className={styleProfile.img} src="https://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg" alt=""/>
            <div className={styleProfile.about}>
                <h2>Viktor Berezovskyi</h2>
                <p>Date of birth 26.02.1996</p>
                <p>City: Valetta</p>
                <p>Education: it-kamasutra</p>
                <p>Link: <a href='https://t.me/berezovskiyviktor'>Telegram</a></p>
            </div>
            <img src={props.profile.photos.small}/>
        </div>
    )
}

export default Profile